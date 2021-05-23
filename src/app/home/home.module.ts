import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeRouting } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    BillingComponent,
    CheckoutComponent,
  ],
  imports: [CommonModule, HomeRouting],
})
export class HomeModule {}
