import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { OrderService } from '../../shared/services/order/order.service';
import { CommonModule } from '@angular/common';
import { ROLE } from '../../shared/constants/role.constant';
import { AccountService } from '../../shared/services/account/account.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { ILogin } from '../../shared/interfaces/account/account.interface';
import { BasketDialogComponent } from '../basket-dialog/basket-dialog.component';
import { PhoneDialogComponent } from "../phone-dialog/phone-dialog.component";
import { SharedModule } from "../../shared/shared.module";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, MatSlideToggleModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public basket: Array<IProductsResponse> = [];
  public currentUser: Array<ILogin> = [];
  public total = 0;
  public count = 0;
  public isOpenBasket = true;
  public isLogin = false;
  public loginUrl = '';
  public loginPage = '';

  ngOnInit(): void {
    // this.loadBasket();
    this.updateBasket();
    // this.checkUserLogin();
    this.checkUpdatesUserLogin();
    // this.updateLocalStorage();
  }

  constructor(
    private orderService: OrderService,
    private accountService: AccountService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  // loadBasked(): void {
  //   if (localStorage.length > 0 && localStorage.getItem('basket')) {
  //     this.basket = JSON.parse(localStorage.getItem('basket') as string);
  //   }
  //   this.getTotalPrice();
  // }
  loadBasket(): void {
    if(localStorage.length > 0 && localStorage.getItem('basket')){
      this.basket = JSON.parse(localStorage.getItem('basket') as string);
    }
    this.getTotalPrice();
  }

  getTotalPrice(): void {
    this.total = this.basket
      .reduce((total: number, prod: IProductsResponse) => total + prod.count * prod.price, 0);
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    })
  }
  // loadBasket(): void {
  //   if (localStorage.length > 0 && localStorage.getItem('basket')) {
  //     this.basket = JSON.parse(localStorage.getItem('basket') as string);
  //     if (this.basket.length > 0) {
  //       this.basketEmpty = false;
  //     }
  //   }
  //   this.getTotalPrice();
  // }




  // getTotalPrice(): void {
  //   this.total = this.basket.reduce((total: number, prod: IProductsResponse) => total + prod.count * prod.price, 0);
  // }

  // updateBasket(): void {
  //   this.orderService.changeBasket.subscribe(() => {
  //     // localStorage.setItem('basket', JSON.stringify(this.basket));
  //   this.loadBasket();
  //   })
  // }



  checkUserLogin(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    if(currentUser && currentUser.role === ROLE.ADMIN){
      this.isLogin = true;
      this.loginUrl = 'admin';
      this.loginPage = 'Admin';
    } else if(currentUser && currentUser.role === ROLE.USER) {
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


  openLoginDialog(): void {
    this.dialog.open(AuthDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'auth-dialog',
      autoFocus: false
    }).afterClosed().subscribe(result => {
      console.log(result);

    })
  }
  openBasketModal(): void {
    const dialogRef = this.dialog.open(BasketDialogComponent, {
      // panelClass: 'basket-info',
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
  openPhoneModal(): void{
    const dialogRef = this.dialog.open(PhoneDialogComponent, {
      panelClass: 'phone',
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
