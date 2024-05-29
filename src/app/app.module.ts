import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './componets/home/home.component';
import { ShopComponent } from './componets/shop/shop.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ProductDetailComponent } from './componets/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
