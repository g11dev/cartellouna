import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {


  nome='pip';
  data = new Date();
  nomeLungo = "pippo pluto paperino"

  constructor(private router: Router) {}

  onGoProduct() {
    this.router.navigate(['/products']);
  }

  testDebugger() {
    console.log(this.nome)
    let variabile = 'ciao';
    variabile = 'ciao2';
  }

  testDebugger2() {
    console.log("test debugg 222");
    this.testDebugger();
  }
}
