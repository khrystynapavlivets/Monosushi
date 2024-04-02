import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { ICategoryResponse } from '../../shared/interfaces/category/category.interface';
import { CategoryService } from '../../shared/services/category/category.service';
import { ProductService } from '../../shared/services/product/product.service';
import { ImageService } from '../../shared/services/image/image.service';

@Component({
  selector: 'app-admin-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.scss'
})
export class AdminProductComponent {
  public adminCategories: Array<ICategoryResponse> = [];
  public adminProducts: Array<IProductsResponse> = [];
  public productForm!: FormGroup;
  public editStatus = false;
  public uploadPercent = 0;
  public isUploaded = false;
  public isOpen = false;
  // private currentCategoryId = 0;
  private currentProductId = 0;
  public primaryColor = '#b5d8f7';
  public addProductForm = true;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private imageService: ImageService,
    // private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.initProductForm();
    this.loadCategories();
    this.loadProduct();
  }

  initProductForm(): void {
    this.productForm = this.fb.group({
      category: [null, Validators.required],
      name: [null, Validators.required],
      path: [null, Validators.required],
      description: [null, Validators.required],
      weight: [null, Validators.required],
      price: [null, Validators.required],
      imagePath: [null, Validators.required],
      count: [1]
    });
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe(data => {
      this.adminCategories = data;
      this.productForm.patchValue({
        category: this.adminCategories[0].id
      })
    })
  }

  loadProduct(): void {
    this.productService.getAll().subscribe(data => {
      this.adminProducts = data;
    })
  }

  addProduct(): void {
    if (this.editStatus) {
      this.productService.update(this.productForm.value, this.currentProductId).subscribe(() => {
        this.loadProduct();
        this.isOpen = false;
        this.editStatus = false;
        // this.toastr.success('Product successfully updated');

      })
    } else {
      this.productService.create(this.productForm.value).subscribe(() => {
        this.loadProduct();
        this.isOpen = false;
        this.editStatus = false;
       
        // this.toastr.success('Product successfully created');
      })
    }
    this.editStatus = false;
    this.isUploaded = false;
     this.productForm.reset();
  }

  editProduct(product: IProductsResponse): void {
    const selectedCategory = this.adminCategories.find(category => category.name === product.category.name);
    this.productForm.patchValue({
      category: selectedCategory,
      name: product.name,
      path: product.path,
      description: product.description,
      weight:product.weight ,
      price:product.price,
      imagePath: product.imagePath,
    });
    this.isOpen = true;
    this.isUploaded = true;
    this.editStatus = true;
    this.currentProductId = product.id;

  }

  deleteProduct(product: IProductsResponse): void {
    this.productService.delete(product.id).subscribe(() => {
      this.loadProduct();
      // this.toastr.success('Product successfully deleted');
    })
  }

  upload(event: any): void {
    const file = event.target.files[0];
    this.imageService.uploadFile('images', file.name, file)
      .then(data => {
        this.productForm.patchValue({
          imagePath: data
        });
        this.isUploaded = true;
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteImage(): void {
    this.imageService.deleteUploadFile(this.valueByControl('imagePath'))
      .then(() => {
        this.isUploaded = false;
        this.uploadPercent = 0;
        this.productForm.patchValue({ imagePath: null });
      })
      .catch(err => {
        console.log(err);
      })
  }

  valueByControl(control: string): string {
    return this.productForm.get(control)?.value;
  }

  toggleOpenForm(): void {
    this.isOpen = !this.isOpen;
  }
  AddProductForm(): void {
    this.addProductForm = false;
  }



}
