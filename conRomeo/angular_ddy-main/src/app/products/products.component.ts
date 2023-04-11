import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products?: Product[];
  productSubscription?: Subscription;
  cartItems? = new Array<Product>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productSubscription = this.cartService.products.subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        alert('Error :' + error.message);
      },
    });
    console.log('ProductsComponent ngOnInit');
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
    console.log('ProductsComponent ngOnDestroy');
  }

  addItem0(f: any) {
    this.cartService.addItem(f)
  }
}
