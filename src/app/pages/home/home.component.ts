import { Component } from '@angular/core';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { ProductService } from '../../shared/services/product/product.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DiscountService } from '../../shared/services/discount/discount.service';
import { IDiscountResponse } from '../../shared/interfaces/discount/discount.interface';
import { OrderService } from '../../shared/services/order/order.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public userProducts: Array<IProductsResponse> = [];
  public discount: Array<IDiscountResponse> = [];


  constructor(private productService: ProductService,
    private discountService: DiscountService,
    private orderService: OrderService,

  ) { }

  ngOnInit(): void {
    this.getDiscounts();
    this.loadDiscounts();
  }

  getDiscounts(): void {
    this.productService.getAllFirebase().subscribe((data) => {
      this.userProducts = data as IProductsResponse[];
    });
  }
  loadDiscounts(): void {
    this.discountService.getAllFirebase().subscribe((data) => {
      this.discount = data as IDiscountResponse[];
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
      if (basket.some((prod) => prod.id === product.id)) {
        const index = basket.findIndex((prod) => prod.id === product.id);
        basket[index].count =
          Number(basket[index].count) + Number(product.count);
        console.log(typeof basket[index].count);
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
