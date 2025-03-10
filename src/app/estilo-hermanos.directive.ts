import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]',
  standalone: true
})
export class EstiloHermanosDirective {

  constructor(private element : ElementRef) { 

    this.element.nativeElement.style.backgroundColor = 'green';
  }

}
// en la directiva se puede cambiar estilos o mostrar algo de acuerdo a los permisos
// las directivas son como los componentes pero no tienen plantilla, sirven para
//  modificar el DOM o para añadir comportamientos a los elementos de la vista.
//  En este caso, la directiva EstiloHermanosDirective cambia el color de fondo
//  de los elementos a los que se aplica a verde.
//  Para aplicar la directiva a un elemento, se añade el selector de la directiva
//  entre corchetes en el elemento de la vista. Por ejemplo, <div appEstiloHermanos>.
//  La directiva se encarga de cambiar el color de fondo del elemento a verde.