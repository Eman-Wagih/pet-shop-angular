import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable } from 'rxjs';

const httpOptions: object = {
  Headers: new HttpHeaders({
    'Content-Type': 'application/josn'
  })}

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  product: Products [] = [];
  apiUrl = 'http://localhost:3000/products';


  constructor(private http: HttpClient) { }
  getProducts(): Observable <Products[]> {
      return this.http.get<Products[]>(`${this.apiUrl}`)
  }

  editProduct(product: Products) {
    return this.http.put<Products>(`${this.apiUrl}${product.id}`, product, httpOptions);
  
   }
}
