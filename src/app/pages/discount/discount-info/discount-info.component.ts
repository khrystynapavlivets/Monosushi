import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDiscountResponse } from '../../../shared/interfaces/discount/discount.interface';
import { DiscountService } from '../../../shared/services/discount/discount.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';




@Component({
  selector: "app-discount-info",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: "./discount-info.component.html",
  styleUrl: "./discount-info.component.scss",
})
export class DiscountInfoComponent {
  currentDiscount: IDiscountResponse = {
    id: 0,
    title: "",
    description: "",
    imagePath: "",
    name: "",
  };


  constructor(
    private discountService: DiscountService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(response => {
      if (response['discountInfo']) {
        this.currentDiscount = response['discountInfo'];
      } else {
        this.loadProduct();
      }
    });
  }

  loadProduct(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.discountService.getOne(id).subscribe(data => {
        this.currentDiscount = data;
      });
    }
  }
}

