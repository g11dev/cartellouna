import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ennova-1';
  conta = 0;
  disabilita = false;
  personaggi = ['pippo', 'pluto']

  /* DONE */
  getTitle() {
    return this.title;
  }

  /* DONE */
  mostraAlert(x: string) {
    alert(x);
  }

  /* DONE */
  incrementa() {
    this.conta++;
    if (this.conta === 5) {
      this.disabilita = true;
      alert('Disabilitato! Sei arrivato a 5');
    }
  }

  /* DONE */
  aggiungi() {
    this.personaggi.push(this.title);
    this.title = '';
  }

  /* DONE */
  cancella(nome: string) {
    alert('sto cancellando: ' + nome)
    const indice = this.personaggi.findIndex(p => p === nome);
    this.personaggi.splice(indice, 1);
  }
}