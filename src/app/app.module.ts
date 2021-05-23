import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FireService } from './service/fire.service';
import { authRouting } from './auth/auth-routing';
import { FilterPipe } from './service/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { AddToCartDirDirective } from './add-to-cart-dir.directive';
import { MenuDirDirective } from './directives/menu-dir.directive';
import { CheckoutDirective } from './directives/checkout.directive';
import { ProductListDirective } from './directives/product-list.directive';
import { BillingDirective } from './directives/billing.directive';
import { BillingCartDirective } from './directives/billing-cart.directive';


let config={
  apiKey: "AIzaSyD-JzqyndYkqvog30wtkDXsVGau3Y8KdlI",
  authDomain: "authenticate-2e379.firebaseapp.com",
  projectId: "authenticate-2e379",
  storageBucket: "authenticate-2e379.appspot.com",
  messagingSenderId: "102439631208",
  appId: "1:102439631208:web:1a7723b813cf56b529bedd",
  measurementId: "G-LPVB6CRZH6"
}

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortPipe,
    AddToCartDirDirective,
    MenuDirDirective,
    CheckoutDirective,
    ProductListDirective,
    BillingDirective,
    BillingCartDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    authRouting,
    ReactiveFormsModule
  ],
  providers: [FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
