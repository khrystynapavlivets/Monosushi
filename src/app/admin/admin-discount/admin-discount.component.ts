import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../shared/services/discount/discount.service';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  Storage,
  deleteObject,
  getDownloadURL,
  percentage,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { IDiscountResponse } from '../../shared/interfaces/discount/discount.interface';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-discount',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-discount.component.html',
  styleUrl: './admin-discount.component.scss',
})
export class AdminDiscountComponent implements OnInit {
  public adminDiscounts!: IDiscountResponse[];
  public name!: string;
  public title!: string;
  public description!: string;
  public editStatus = false;
  public addDiscountForm = true;
  public discountForm!: FormGroup;
  public currentDate = new Date();
  private currentDiscountId!: number | string;
  public uploadPercent!: number;
  public isUploaded = false;
  public primaryColor = '#b5d8f7';

  constructor(
    private discountService: DiscountService,
    private fb: FormBuilder,
    private storage: Storage,
    private toaster: ToastrService,
  ) { }

  ngOnInit(): void {
    this.initDiscountForm();
    this.loadDiscounts();
  }

  toggleAddDiscountForm(): void {
    this.addDiscountForm = !this.addDiscountForm;
  }

  initDiscountForm(): void {
    this.discountForm = this.fb.group({
      name: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      imagePath: [null, Validators.required],
    });
  }

  loadDiscounts(): void {
    this.discountService.getAllFirebase().subscribe((data) => {
      this.adminDiscounts = data as IDiscountResponse[];
    });
  }



  addDiscount(): void {
    if (this.editStatus) {
      this.discountService.updateFirebase(this.discountForm.value, this.currentDiscountId as string).then(() => {
        this.loadDiscounts();
        this.toaster.success('Discount successfully updated');
      })
    } else {
      this.discountService.createFirebase(this.discountForm.value).then(() => {
        this.toaster.success('Discount successfully created');
      })
    }
    this.editStatus = false;
    this.discountForm.reset();
    this.isUploaded = false;
    this.uploadPercent = 0;
  }


  editDiscount(discount: IDiscountResponse): void {
    this.discountForm.patchValue({
      name: discount.name,
      title: discount.title,
      description: discount.description,
      imagePath: discount.imagePath,
    });
    this.editStatus = true;
    this.currentDiscountId = discount.id;
    this.isUploaded = true;
  }

  deleteDiscount(discount: IDiscountResponse): void {
    this.discountService.deleteFirebase(discount.id as string).then(() => {
      this.loadDiscounts();
      this.toaster.success('Discount successfully deleted');
    })
  }

  upload(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('images', file.name, file)
      .then((data) => {
        this.discountForm.patchValue({
          imagePath: data,
        });
        this.isUploaded = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async uploadFile(
    folder: string,
    name: string,
    file: File | null
  ): Promise<string> {
    const path = `${folder}/${name}`;
    let url = '';
    if (file) {
      try {
        const storageRef = ref(this.storage, path);
        const task = uploadBytesResumable(storageRef, file);
        percentage(task).subscribe((data) => {
          this.uploadPercent = data.progress;
        });
        await task;
        url = await getDownloadURL(storageRef);
      } catch (e: any) {
        console.error(e);
      }
    } else {
      console.log('wrong format');
    }
    return Promise.resolve(url);
  }

  deleteImage(): void {
    const task = ref(this.storage, this.valueByControl('imagePath'));
    deleteObject(task).then(() => {
      console.log('File deleted');
      this.isUploaded = false;
      this.uploadPercent = 0;
      this.discountForm.patchValue({
        imagePath: null,
      });
    });
  }

  valueByControl(control: string): string {
    return this.discountForm.get(control)?.value;
  }
}
