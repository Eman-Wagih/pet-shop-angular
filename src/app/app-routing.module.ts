import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { ShopComponent } from './shopping/shop/shop.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { CartComponent } from './shopping/cart/cart.component';

const routes: Routes = [
  {path: 'cats', component: CatsComponent, title: 'adopt a cat'},
  {path: 'cats/:id', component: EditCatComponent, title: 'edit cat details'},
  {path: 'dogs', component: DogsComponent, title: 'adopt a dog'}, 
  {path: 'adoption', component: AdoptionComponent, title: 'adopt a pet'},
  {path: 'shop', component: ShopComponent, title: 'shop'}, 
  {path: 'sign-in', component: SignInComponent, title: 'sign in'},
  {path: 'sign-up', component: SignUpComponent, title: 'sign up'},
  {path: 'cart', component: CartComponent, title: 'your cart'},
  {path: '', component: CatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
