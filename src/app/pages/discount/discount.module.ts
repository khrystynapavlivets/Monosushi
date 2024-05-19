import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountRoutingModule } from './discount-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DiscountComponent } from './discount.component';
import { DiscountInfoComponent } from './discount-info/discount-info.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DiscountRoutingModule,
    SharedModule,
    DiscountComponent,
    DiscountInfoComponent
  ]
})
export class DiscountModule { }
