import { AddToCartDir } from './directives/add-to-cart-dir.directive';
import { BillingCartDir } from './directives/billing-cart.directive';
import { BillingDir } from './directives/billing.directive';
import { CheckOutDir } from './directives/checkout.directive';
import { MenuDir } from './directives/menu-dir.directive';
import { ProductsListDir } from './directives/product-list.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

export const dirConfig = [
  MenuDir,
  ProductsListDir,
  AddToCartDir,
  BillingDir,
  BillingCartDir,
  CheckOutDir,
];
