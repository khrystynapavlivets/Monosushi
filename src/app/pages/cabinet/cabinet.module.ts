import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CabinetRoutingModule } from "./cabinet-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { CabinetComponent } from "./cabinet.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, CabinetRoutingModule, SharedModule, CabinetComponent],
})
export class CabinetModule {}
