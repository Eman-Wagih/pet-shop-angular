import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Products[] = []
  // quantity: number = 0;
  isDesables: boolean = false
  cartProduct: Products[] = [];

  quantity: { [productId: string]: number } = {};

  constructor(private productSrv: ProductsService,
              private route:Router
  ) { }

  ngOnInit(): void {
    this.productSrv.getProducts().subscribe(products => this.products = products)
  }

  // increase(product: Products) {
  //   this.quantity ++
  //   if (this.quantity > 0) {
  //     this.isDesables = false;
  //   }
  // }

  // decrease(product: Products) {
  //   if (this.quantity > 0) {
  //     this.quantity--;
  //   }
  //   if (this.quantity === 0) {
  //     this.isDesables = true;
  //   }
  // }

   increase(product: Products) {
    const productId = product.id;
    if (!this.quantity[productId]) {
      this.quantity[productId] = 0;
    }
    this.quantity[productId]++;
  }

  decrease(product: Products) {
    const productId = product.id; 
    if (this.quantity[productId] && this.quantity[productId] > 0) {
      this.quantity[productId]--;
    }
  }

  isDisabled(product: Products) {
    const productId = product.id;
    return !this.quantity[productId] || this.quantity[productId] === 0;
  }

  inCart(product: Products) {
    this.cartProduct.push(product);
    console.log(this.cartProduct)
    console.log(`product ${product.productType} was added to cart`)
  }

  navigate() {
    
  }
}

