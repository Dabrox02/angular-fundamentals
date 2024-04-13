import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  elementos: string[] = [];

  constructor() {
    this.elementos.push("Azul", "Purpura", "Rosado");
  }

  getElementos(): string[] {
    return this.elementos;
  }
}
