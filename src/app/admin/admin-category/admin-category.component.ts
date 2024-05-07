import { Component } from '@angular/core';
import { ICategoryResponse } from '../../shared/interfaces/category/category.interface';
import { CategoryService } from '../../shared/services/category/category.service';
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

@Component({
  selector: 'app-admin-category',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.scss',
})
export class AdminCategoryComponent {
  public adminCategories: Array<ICategoryResponse> = [];
  public categoryForm!: FormGroup;
  public editStatus = false;
  public uploadPercent!: number;
  public isUploaded = false;
  private currentCategoryId = 0;
  public addCategoryForm = true;
  public primaryColor = '#b5d8f7';

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private storage: Storage
  ) { }

  ngOnInit(): void {
    this.initCategoryForm();
    this.loadCategories();
  }
  toggleAddCategoryForm(): void {
    this.addCategoryForm = !this.addCategoryForm;
  }
  AddCategoryForm(): void {
    this.addCategoryForm = false;
  }
  initCategoryForm(): void {
    this.categoryForm = this.fb.group({
      name: [null, Validators.required],
      path: [null, Validators.required],
      imagePath: [, Validators.required],
    });
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.adminCategories = data;
    });
  }

  addCategory(): void {
    if (this.editStatus) {
      this.categoryService
        .update(this.categoryForm.value, this.currentCategoryId)
        .subscribe(() => {
          this.loadCategories();
        });
    } else {
      this.categoryService.create(this.categoryForm.value).subscribe(() => {
        this.loadCategories();
      });
    }
    this.editStatus = false;
    this.categoryForm.reset();
    this.isUploaded = false;
    this.uploadPercent = 0;
  }

  editCategory(category: ICategoryResponse): void {
    this.categoryForm.patchValue({
      name: category.name,
      path: category.path,
      imagePath: category.imagePath,
    });
    this.editStatus = true;
    this.currentCategoryId = category.id;
    this.isUploaded = true;
  }

  deleteCategory(category: ICategoryResponse): void {
    this.categoryService.delete(category.id).subscribe(() => {
      this.loadCategories();
    });
  }

  upload(event: any): void {
    const file = event.target.files[0];
    this.uploadFile('images', file.name, file)
      .then((data) => {
        this.categoryForm.patchValue({
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
      this.categoryForm.patchValue({
        imagePath: null,
      });
    });
  }

  valueByControl(control: string): string {
    return this.categoryForm.get(control)?.value;
  }
}
