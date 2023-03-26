import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() titolo = 'mioTitolo'; //così espongo il titolo all'html e posso modificarlo
  @Input() mostra = true;
  @Output() eventoCancella = new EventEmitter<string>();

  toggleMostra(){
    this.mostra = !this.mostra
  }

  cancellaAcc(){
    this.eventoCancella.emit(this.titolo);
  }
}
