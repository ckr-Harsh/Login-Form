import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeRouting } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dirConfig } from '../directive.config';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    BillingComponent,
    CheckoutComponent,
    dirConfig,
  ],
  imports: [CommonModule, HomeRouting, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
