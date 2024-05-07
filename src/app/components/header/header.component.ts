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

import { MatMenuTrigger } from '@angular/material/menu';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ILogin } from '../../shared/interfaces/account/account.interface';
import { BasketDialogComponent } from '../basket-dialog/basket-dialog.component';












@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, MatSlideToggleModule],
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

  // public menuOpen = false;
  // public basketOpen = false;
  // public basketEmpty = true;

  // public menuUserOpen = false;


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

  // checkUserLogin(): void {
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
  //   if(currentUser && currentUser.role === ROLE.ADMIN){
  //     this.isLogin = true;
  //     this.loginUrl = 'admin';
  //     this.loginPage = 'Admin';
  //   } else if(currentUser && currentUser.role === ROLE.USER) {
  //     this.isLogin = true;
  //     this.loginUrl = 'cabinet';
  //     this.loginPage = 'Cabinet';
  //   } else {
  //     this.isLogin = false;
  //     this.loginUrl = '';
  //     this.loginPage = '';
  //   }
  // }

  // checkUpdatesUserLogin(): void {
  //   this.accountService.isUserLogin$.subscribe(() => {
  //     // localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  //     this.checkUserLogin();
  //   });
  // }


  // updateLocalStorage(): void {
  //   localStorage.setItem('basket', JSON.stringify(this.basket));
  //   this.getTotalPrice();
  // }

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

}
