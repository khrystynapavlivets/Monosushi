import {
  CanActivateFn,
  UrlTree,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Routes,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ROLE } from "../../constants/role.constant";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
  const routes: Routes = [
    {
      path: "protected-route",
      // component: MyComponent,
      canActivate: [AuthGuard],
    },
  ];

  return of(
    currentUser &&
      (currentUser.role === ROLE.ADMIN || currentUser.role === ROLE.USER),
  ).pipe(
    map((authorized) => {
      // Ensure consistent return type
      if (!authorized) {
        // @ts-ignore
        this.router.navigate([""]); // Redirect to default route
      }
      return authorized;
    }),
    tap((authorized) => {
      // Handle side effects (optional)
      if (!authorized) {
        console.warn("User is not authorized for this route"); // Log or display an error message
      }
    }),
  );
};
