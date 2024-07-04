import {
  RouterModule,
  Routes,
  RouterLinkActive,
  PreloadAllModules,
} from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { ProductInfoResolver } from "./shared/services/product/product-info.resolver";
import { AuthGuard } from "./shared/guards/auth/auth.guard";
import { SharedModule } from "./shared/shared.module";


import { HomeComponent } from "./pages/home/home.component";
import { DiscountComponent } from "./pages/discount/discount.component";
import { DiscountInfoComponent } from "./pages/discount-info/discount-info.component";
import { ProductComponent } from "./pages/product/product.component";
import { ProductInfoComponent } from "./pages/product-info/product-info.component";
import { DeliveryComponent } from "./pages/delivery/delivery.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { AboutComponent } from "./pages/about/about.component";
import { NewsComponent } from "./pages/news/news.component";
import { OffertaComponent } from "./pages/offerta/offerta.component";
import { PartnersComponent } from "./pages/partners/partners.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "discount", component: DiscountComponent },
  { path: "discount/:id", component: DiscountInfoComponent },
  { path: "product/:category", component: ProductComponent },
  {
    path: "product/:category/:id",
    component: ProductInfoComponent,
    resolve: { productInfo: ProductInfoResolver },
  },

  { path: "delivery", component: DeliveryComponent },
  { path: "payment", component: PaymentComponent },
  { path: "about", component: AboutComponent },
  { path: "news", component: NewsComponent },
  { path: "offerta", component: OffertaComponent },
  { path: "partners", component: PartnersComponent },
  { path: "contact", component: ContactComponent },
  { path: "checkout", component: CheckoutComponent },
  {
    path: "auth",
    loadChildren: () =>
      import("./pages/authorization/authorization.module").then(
        (m) => m.AuthorizationModule,
      ),
  },
  {
    path: "cabinet",
    loadChildren: () =>
      import("./pages/cabinet/cabinet.module").then((m) => m.CabinetModule),
  },
  {
    path: "admin",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    SharedModule,
  ],
  providers: [FormsModule],
  exports: [RouterModule, RouterLinkActive, SharedModule],
})
export class AppRoutingModule {}
