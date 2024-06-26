import { Component, OnInit } from '@angular/core';
import { DiscountService } from '../../shared/services/discount/discount.service';
import { CommonModule } from '@angular/common';
import { IDiscountResponse } from '../../shared/interfaces/discount/discount.interface';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.scss'
})
export class DiscountComponent implements OnInit {
  public userDiscounts: Array<IDiscountResponse> = [];

  constructor(
    private discountService: DiscountService
  ) { }

  ngOnInit(): void {
    this.getDiscounts();
  }

  getDiscounts(): void {
    this.discountService.getAll().subscribe(data => {
      this.userDiscounts = data;
    })
  }

}
