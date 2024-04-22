import { Component } from '@angular/core';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { OrderService } from '../../shared/services/order/order.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  public basketArray: Array<IProductsResponse> = [];
  public basket: Array<IProductsResponse> = [];
  public total = 0;
  public count = 0;



  ngOnInit(): void {
    this.loadBasked();
    this.updateBasket();
  }

  constructor(private orderService: OrderService) { }
  loadBasked(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
    }
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.total = this.basket.reduce((total: number, prod: IProductsResponse) =>
      total + prod.count * prod.price, 0)
    this.count = this.basket.reduce(
      (total: number, prod: IProductsResponse) => total + prod.count,
      0
    );
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() =>
      this.loadBasked())
  }
}
