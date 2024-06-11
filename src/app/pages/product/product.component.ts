import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnDestroy {
  public userProducts: Array<IProductsResponse> = [];
  private eventSubscription!: Subscription;



  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public  http: HttpClient
    
  ) {
    this.eventSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadProducts();
      }
    });
  }

  ngOnInit(
  ): void { }

  loadProducts(): void {
    const categoryName = this.activatedRoute.snapshot.paramMap.get('category') as string;
    this.productService.getAllByCategory(categoryName).subscribe({
      next: (data) => this.userProducts = data,
        error: (err) => console.error('Error fetching products', err)
    })
  }
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }


}
