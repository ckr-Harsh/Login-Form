import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/assets/Store/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public cartflag: boolean = false;
  public sortBy: string = '';
  public sortOption: string = 'product_name|asc';

  constructor(public products: ProductsModel) {}

  ngOnInit(): void {
    this.ref();
  }

  ref() {
    this.cartflag = false;
    setTimeout(() => {
      this.cartflag = true;
    }, 10);
  }
}
