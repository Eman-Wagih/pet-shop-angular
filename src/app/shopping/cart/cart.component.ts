import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() product: Products[] = [];
  onTheSamePage: boolean = false
  public Pageroute!: string; 
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  this.Pageroute = this.route.url
  console.log(this.Pageroute)
  console.log(this.product)
  }

  // checkPgae() {
  //   console.log('Current Page Route:', this.Pageroute); // Log the current value of Pageroute

  //   if ( this.Pageroute === "/cart") {
  //     console.log('yes')
  //     return true
  //   } else if (this.Pageroute === "/shop") {
  //     console.log('no')

  //     return false
  //   }
  // }

}
