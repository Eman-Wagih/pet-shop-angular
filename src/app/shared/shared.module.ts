import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderBackgroundComponent } from './header-background/header-background.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent, HeaderBackgroundComponent, HeaderBackgroundComponent],
  imports: [
    CommonModule,
    RouterModule
    
    
  ],
  exports: [
    NavBarComponent,
    HeaderBackgroundComponent

  ]
})
export class SharedModule { }
