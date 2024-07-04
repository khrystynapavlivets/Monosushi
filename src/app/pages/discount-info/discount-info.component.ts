import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscountResponse } from '../../shared/interfaces/discount/discount.interface';
import { DiscountService } from '../../shared/services/discount/discount.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-discount-info',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './discount-info.component.html',
  styleUrl: './discount-info.component.scss'
})
export class DiscountInfoComponent {
  public discount!: IDiscountResponse;

  constructor(
    private discountService: DiscountService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getOneDiscount();
  }

  getOneDiscount(): void {
     const discount_ID = this.activatedRoute.snapshot.paramMap.get('id');
    this.discountService
      .getOneFirebase(discount_ID as string)
      .subscribe((data) => {
        this.discount = data as IDiscountResponse;
      });
  }
}

