import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  constructor(private cartService: CartService) { }

  listaCarrello= new Array<Product>();
  prezzoFinale = 0;

  prendiCarrello() {
    this.listaCarrello = this.cartService.getItems()
  
  }
  ngOnInit(): void {
    this.prendiCarrello()
    this.totCarrello();
  }

  totCarrello() {
    this.prezzoFinale = this.listaCarrello?.reduce(
      (accumulator: number , item: Product) => accumulator + item.price,
      0
    );
  }




}
