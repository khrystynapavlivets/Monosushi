import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {

}
