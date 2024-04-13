import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() dataHijo: string = "";
  @Output() eventEmitterParaPadre: EventEmitter<string> = new EventEmitter<string>();

  enviarDataPadre(valor: string, event: any) {
    console.log(event);
    console.log(event.target);
    if (valor && valor.trim() !== "") {
      this.eventEmitterParaPadre.emit(valor);
    }
    event.target.value = "";
  }

}
