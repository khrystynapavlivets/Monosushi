import { Injectable, inject } from "@angular/core";
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
  Resolve,
} from "@angular/router";
import { Observable} from 'rxjs';
import { IProductsResponse } from '../../interfaces/product/product.interface';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoResolver implements Resolve<IProductsResponse> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductsResponse> {
    return this.productService.getOne(Number(route.paramMap.get('id')));
  }
}
