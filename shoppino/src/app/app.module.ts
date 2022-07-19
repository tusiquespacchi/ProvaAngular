import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProdutDetailsComponent } from './produt-details/produt-details.component';
import { CartComponent } from './cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { SpeseComponent } from './spese/spese.component';
import { VenditeComponent } from './vendite/vendite.component';

import { GestioneComponent } from './vendite/gestione/gestione.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProdutDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'shipping', component: ShippingComponent },
  ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProdutDetailsComponent,
    CartComponent,
    ShippingComponent,
    SpeseComponent,
    VenditeComponent,
    
    GestioneComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
