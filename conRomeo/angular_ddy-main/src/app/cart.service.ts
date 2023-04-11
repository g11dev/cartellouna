import { Injectable, OnInit } from '@angular/core';

import { PaginatedProducts, Product } from './models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _products?: Product[];

  private _productCache: { [key: number]: Product } = {};

  private _cartItems= new Array<Product>();

  constructor(private http: HttpClient) { }

  products = new Observable<Product[]>((subscribe) => {
    if (this._products) {
      subscribe.next(this._products);
    } else {
      this.http.get('https://dummyjson.com/products').subscribe({
        next: (json) => {
          const paginatedProducts = json as PaginatedProducts;
          this._products = paginatedProducts.products;
          subscribe.next(this._products);
        },
      });
    }
  });

  product = (id: number) =>
    new Observable<Product>((subscribe) => {
      const product = this._productCache?.[id];
      if (product) {
        subscribe.next(product);
      } else {
        const command = `https://dummyjson.com/products/${id}`;
        this.http.get(command).subscribe({
          next: (json) => {
            const product = json as Product;
            this._productCache[id] = product;
            subscribe.next(product);
          },
        });
      }
    });
    addItem(f: any) {
      const a: any = this._products?.[f - 1];
      this._cartItems?.push(a);
      console.log(this._cartItems);
    }

    getItems() {
      return this._cartItems;
    }

    

}
