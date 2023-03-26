import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css'],
})
export class CalcolatriceComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('app-calcolatrice constructor');
  }

  ngOnInit(): void {
    console.log('app-calcolatrice OnInit');
  }

  ngOnDestroy(): void {
    console.log('app-calcolatrice OnDestroy');
  }
}
