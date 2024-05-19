import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CabinetRoutingModule } from "./cabinet-routing.module";
import { CabinetComponent } from "./cabinet.component";
import { SharedModule } from "../../shared/shared.module";
import { UserDataComponent } from "./user-data/user-data.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, CabinetRoutingModule, SharedModule, CabinetComponent,
    UserDataComponent, ChangePasswordComponent,OrderHistoryComponent],
})
export class CabinetModule {}
