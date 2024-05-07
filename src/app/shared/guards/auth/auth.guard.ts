// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable, from, takeWhile, tap } from 'rxjs';
// import { ROLE } from '../../constants/role.constant';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanLoad {

//   constructor(
//     private router: Router
//   ) { }

//   canLoad() {
//     const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
//     if (currentUser && (currentUser.role === ROLE.ADMIN || currentUser.role === ROLE.USER)) {
//       return true;
//     }
//     this.router.navigate(['']);
//     return false;
//   }

//  }

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE } from '../../constants/role.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    if(currentUser && (currentUser.role === ROLE.ADMIN || currentUser.role === ROLE.USER)){
      return true;
    } 
    this.router.navigate(['']);
      return false;
  }
  
}

