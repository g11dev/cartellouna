import { Component } from '@angular/core';

@Component({                            //DECORATORI (questi sono forniti da angular)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {             //nome IMPORTATO in app.module.ts
  title = 'Non Mollo';
  esercizio = '';
  esercizi = ['stop e tiro', 'tabellone mano sinistra', 'andare verso canestro']
  conta = 0
  disabilita = false;

  incrementa() {
    this.conta++;
    if (this.conta === 5) {
      this.disabilita = true;
    }  
  }

  getTitle() {
    return this.title;
  }

  allerto() {
    alert('il titolo in questo momento è ' + this.title)
  }

  aggiungiEsercizio() {
    this.esercizi.push(this.esercizio);
    this.esercizio = '';
  }

  cancellaEsercizio(nome: string) {
    alert('sto cancellando: ' + nome)
    const indice = this.esercizi.findIndex(p => p === nome);
    this.esercizi.splice(indice, 1);
  }
}

