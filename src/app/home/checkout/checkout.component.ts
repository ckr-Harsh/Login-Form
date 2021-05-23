import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductsModel } from 'src/assets/Store/products';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  public cartflag: boolean = false;

  constructor(public cart: CartService, public products: ProductsModel) {}

  ngOnInit(): void {
    this.ref();
  }

  ref() {
    this.cartflag = false;
    setTimeout(() => {
      this.cartflag = true;
    }, 1000);
  }
}
