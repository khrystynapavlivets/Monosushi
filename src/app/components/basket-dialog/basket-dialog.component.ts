import { Component } from '@angular/core';
import { OrderService } from '../../shared/services/order/order.service';
import { AccountService } from '../../shared/services/account/account.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';


import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROLE } from '../../shared/constants/role.constant';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';


@Component({
  selector: 'app-basket-dialog',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet ],
  templateUrl: './basket-dialog.component.html',
  styleUrl: './basket-dialog.component.scss'
})
export class BasketDialogComponent {

  public basketEmpty = true;
  public total = 0;
  public basket: Array<IProductsResponse> = [];
  public count = 0;
  public isOpenBasket = true;

  constructor(
    private orderService: OrderService,
    private accountService: AccountService,
    private dialogRef: MatDialogRef<BasketDialogComponent>,
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
  }
  loadBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
    }
    this.getTotalPrice();
  }
  getTotalPrice(): void {
    this.total = this.basket.reduce(
      (total: number, prod: IProductsResponse) =>
        total + prod.count * prod.price,
      0
    );
    this.count = this.basket.length;
  }

  // getTotalPrice(): void {
  //   this.total = this.basket
  //     .reduce((total: number, prod: IProductsResponse) => total + prod.count * prod.price, 0);
  // }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    })
  }

  updateLocalStorage(): void {
    localStorage.setItem('basket', JSON.stringify(this.basket));
    this.getTotalPrice();
  }

  closePopup() {
    this.isOpenBasket = false;
  }

  // delete(product: IProductsResponse) {
  //   const index = this.basket.findIndex(item => item.id === product.id);
  //   if (index !== -1) {
  //     this.basket.splice(index, 1);
  //     this.updateLocalStorage();
  //   }
  //   if (this.basket.length == 0) {
  //     this.basketEmpty = true;
  //   }
  // }
    delete(product: IProductsResponse) {
  if (this.basket.some((prod) => prod.id === product.id)) {
    const index = this.basket.findIndex(
      (prod) => prod.id === product.id
    );
    this.basket.splice(index, 1);
    localStorage.setItem('basket', JSON.stringify(this.basket));
    this.updateBasket();
    this.orderService.changeBasket.next(true);
  }
}

orderProduct(): void {
  const user = JSON.parse(localStorage.getItem('currentUser') as string);

  if (user && user.role === ROLE.USER) {
    this.router.navigate(['/ordersProduct']);
  } else {
    this.dialog.open(AuthDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'auth-dialog',
      autoFocus: false,
      position: {
        top: '100px',
      },
    });
  }
}

}
