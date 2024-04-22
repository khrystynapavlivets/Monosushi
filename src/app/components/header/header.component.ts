import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { OrderService } from '../../shared/services/order/order.service';
import { CommonModule } from '@angular/common';
import { ROLE } from '../../shared/constants/role.constant';
import { AccountService } from '../../shared/services/account/account.service';

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
  public isOpenBasket = true;
  public isLogin = false;
  public loginUrl = '';
  public loginPage = '';

  ngOnInit(): void {
    this.loadBasked();
    this.updateBasket();
    this.checkUserLogin();
    this.checkUpdatesUserLogin();
  }

  constructor(
    private orderService: OrderService,
    private accountService: AccountService
  ) { }

  loadBasked(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
    }
    this.getTotalPrice();
  }

  // getTotalPrice(): void {
  //   this.total = this.basket.reduce((total: number, prod: IProductsResponse) =>
  //     total + prod.count * prod.price, 0)
  //   this.count = this.basket.reduce(
  //     (total: number, prod: IProductsResponse) => total + prod.count,
  //     0
  //   );
  // }

  getTotalPrice(): void {
    this.total = this.basket
      .reduce((total: number, prod: IProductsResponse) => total + prod.count * prod.price, 0);
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() =>
      this.loadBasked())
  }

  checkUserLogin(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    if (currentUser && currentUser.role === ROLE.ADMIN) {
      this.isLogin = true;
      this.loginUrl = 'admin';
      this.loginPage = 'Admin';
    } else if (currentUser && currentUser.role === ROLE.USER) {
      this.isLogin = true;
      this.loginUrl = 'cabinet';
      this.loginPage = 'Cabinet';
    } else {
      this.isLogin = false;
      this.loginUrl = '';
      this.loginPage = '';
    }
  }

  checkUpdatesUserLogin(): void {
    this.accountService.isUserLogin$.subscribe(() => {
      this.checkUserLogin();
    })
  }

  openModal() {
    this.isOpenBasket = false;
  }
  closePopup() {
    this.isOpenBasket = true;
  }
}
