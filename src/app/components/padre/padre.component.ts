import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { DatosService } from '../../servicios/datos.service';
import { ColorAzulDirective } from '../../directivas/color-azul.directive';

@Component({
    selector: 'app-padre',
    standalone: true,
    templateUrl: './padre.component.html',
    styleUrl: './padre.component.css',
    imports: [HijoComponent, ColorAzulDirective]
})
export class PadreComponent {
    dataParaHijo: string = "Enviado desde el componente padre";

    arregloColores: string[] = ['Verde', 'Amarillo', 'Rojo']

    constructor(dataService: DatosService) {
        this.arregloColores.push(...dataService.getElementos());
    }

    agregarAlArreglo(nuevosValores: string) {
        this.arregloColores.push(nuevosValores)
    }
}
