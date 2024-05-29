import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ShopComponent } from './componets/shop/shop.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ProductDetailComponent } from './componets/product-detail/product-detail.component';
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shop', component: ShopComponent},
  {path:'contact', component: ContactComponent},
  {path:'product-detail', component: ProductDetailComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
