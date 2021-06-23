import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FireService } from './service/fire.service';
import { authRouting } from './auth/auth-routing';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BillingFormModel } from 'src/assets/Store/billing';
import { ProductsModel } from 'src/assets/Store/products';
import { CompanyDetailsModel } from 'src/assets/Store/details';
import { StorageService } from './service/storage.service';
import { CartService } from './service/cart.service';
import { dirConfig } from './directive.config';

let config = {
  apiKey: 'AIzaSyD-JzqyndYkqvog30wtkDXsVGau3Y8KdlI',
  authDomain: 'authenticate-2e379.firebaseapp.com',
  projectId: 'authenticate-2e379',
  storageBucket: 'authenticate-2e379.appspot.com',
  messagingSenderId: '102439631208',
  appId: '1:102439631208:web:1a7723b813cf56b529bedd',
  measurementId: 'G-LPVB6CRZH6',
};

@NgModule({
  declarations: [AppComponent, SortPipe, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    authRouting,
    ReactiveFormsModule,
  ],
  providers: [
    ProductsModel,
    BillingFormModel,
    CompanyDetailsModel,
    StorageService,
    CartService,
    FireService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
