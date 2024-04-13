import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { ShopComponent } from './shopping/shop/shop.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { EditDogComponent } from './edit-dog/edit-dog.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './shopping/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    AdoptionComponent,
    ShopComponent,
    SignInComponent,
    SignUpComponent,
    EditCatComponent,
    EditDogComponent,
    SearchComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,  
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
