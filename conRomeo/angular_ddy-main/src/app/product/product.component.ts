import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  idProductSubscription?: Subscription;
  productSubscription?: Subscription;
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.idProductSubscription = this.route.params.subscribe((params) => {
      const { id } = params ?? {};
      this.productSubscription = this.cartService
        .product(id)
        .subscribe((product) => {
          this.product = product;
        });
      console.log('ProductComponent dentro idProductSubscription: ' + id);
    });
  }

  ngOnDestroy(): void {
    console.log('ProductComponent ngOnDestroy');
    this.idProductSubscription?.unsubscribe();
    this.productSubscription?.unsubscribe();
  }
}
