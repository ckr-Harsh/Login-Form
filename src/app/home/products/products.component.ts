import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/assets/Store/products';
import { AddToCartDir } from '../../directives/add-to-cart-dir.directive';
import { ProductsListDir } from '../../directives/product-list.directive';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public cartflag: boolean = false;
  public sortBy: string = '';
  public sortOption: string = 'product_name|asc';
  searchText: string;

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
