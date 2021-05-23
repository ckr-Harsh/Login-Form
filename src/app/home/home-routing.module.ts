import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'billing',
    component: BillingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
