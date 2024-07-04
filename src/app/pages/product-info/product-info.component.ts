import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { OrderService } from '../../shared/services/order/order.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-info',
  standalone: true,

  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent implements OnInit {
  public currentProduct!: IProductsResponse;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(response => {
      this.currentProduct = response['productInfo'];
    })
  }

  loadProduct(): void {
    const ID = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService
      .getOneFirebase(ID as string)
      .subscribe((data) => {
        this.currentProduct = data as IProductsResponse;
      });
  }


  productCount(product: IProductsResponse, value: boolean): void {
    if (value) {
      ++product.count;
    } else if (!value && product.count > 1) {
      --product.count;
    }
  }

  addToBasket(product: IProductsResponse): void {
    let basket: Array<IProductsResponse> = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      basket = JSON.parse(localStorage.getItem('basket') as string);
      if (basket.some(prod => prod.id === product.id)) {
        const index = basket.findIndex(prod => prod.id === product.id);
        basket[index].count += product.count;
      } else {
        basket.push(product);
      }
    } else {
      basket.push(product);
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    product.count = 1;
    this.orderService.changeBasket.next(true);
  }
}
