import { Component } from '@angular/core';
import { IProductsResponse } from '../../shared/interfaces/product/product.interface';
import { ProductService } from '../../shared/services/product/product.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public userProducts: Array<IProductsResponse> = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getDiscounts();
  }

  getDiscounts(): void {
    this.productService.getAll().subscribe(data => {
      this.userProducts = data;
    })
  }

}
