import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ROLE } from '../../constants/role.constant';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const currentUserString = localStorage.getItem('currentUser');
        const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

        return of(
            currentUser &&
            (currentUser.role === ROLE.ADMIN || currentUser.role === ROLE.USER)
        ).pipe(
            map((authorized) => {
                if (!authorized) {
                    return this.router.createUrlTree(['']); // Redirect to default route
                }
                return authorized;
            }),
            tap((authorized) => {
                if (!authorized) {
                    console.warn('User is not authorized for this route'); // Log or display an error message
                }
            })
        );
    }
}
