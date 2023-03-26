import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent {
  @Input() depositoPrimo = 'Titolo nel componente'; //così espongo il titolo all'html e posso modificarlo
  @Input() mostra = true;
  @Output() eventoCancellaCreato = new EventEmitter<string>();


  toggleMostra(){
    this.mostra = !this.mostra
  }

  cancellaItem(){
    this.eventoCancellaCreato.emit(this.depositoPrimo);
  }
 

}
