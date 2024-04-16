import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { OrderService } from '../../shared/services/order/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  public basket: Array<IProductsResponse> = [];
  public total = 0;
  public count = 0;
  isOpenBasket = true;

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
  openModal() {
    this.isOpenBasket = false;
  }
  closePopup() {
    this.isOpenBasket=true;
    }
}
