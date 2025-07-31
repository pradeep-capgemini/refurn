import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
=======
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { PaymentComponent } from './payment/payment.component';
import { authGuard } from './auth.guard';
import { ProductSellingHistoryComponent } from './product-selling-history/product-selling-history.component';
>>>>>>> 07ed42f3d7ba3398297011d8c76ba41cb2a398f5

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
<<<<<<< HEAD
  { path: 'cart', component: CartComponent }
=======
  { path: 'add-product', component: SellerComponent,canActivate: [authGuard] },
  { path: 'product-selling-history', component: ProductSellingHistoryComponent },
  { path: 'admin', component: AdminComponent,canActivate: [authGuard] },

>>>>>>> 07ed42f3d7ba3398297011d8c76ba41cb2a398f5
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
