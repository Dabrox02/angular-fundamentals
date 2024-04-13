import { Directive, ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';


@Directive({
  selector: '[appColorAzul]',
  standalone: true
})
export class ColorAzulDirective implements OnDestroy {

  private observerChanges!: MutationObserver;

  constructor(private _element: ElementRef) {

    this.observerChanges = new MutationObserver((mutationsList, observer) => {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
          console.log(this._element.nativeElement.textContent);
        }
        // console.log('Elemento afectado:', mutation.target);
        // Realiza acciones específicas en respuesta a los cambios observados
      });
    });

    // this.observerChanges = new MutationObserver((mutationsList, observer) => {
    //   mutationsList.forEach(mutation => {
    //     if (mutation.type === 'attributes') {
    //       const attributeName = mutation.attributeName;
    //       const oldValue = mutation.oldValue;
    //       const newValue = this._element.nativeElement.getAttribute(attributeName);
    //       console.log('Tipo de mutación:', mutation.type);
    //       console.log('Atributo afectado:', attributeName);
    //       console.log('Valor anterior:', oldValue);
    //       console.log('Nuevo valor:', newValue);
    //     }
    //   });
    // });

    this.observerChanges.observe(this._element.nativeElement, { attributes: true, childList: true, subtree: true });
    this._element.nativeElement.style.backgroundColor = '#8f68f9';
  }

  ngOnDestroy() {
    this.observerChanges.disconnect();
  }
}
