import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado',
  standalone: true
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(valor: string | undefined): string {
    return valor?.toUpperCase() || '';
  }

}

//Pipes: son una forma de transformar datos antes de mostrarlos en la vista.
//  Se utilizan para dar formato a los datos de una forma más legible o para
//  realizar operaciones con ellos antes de mostrarlos.

// Los pipes añaden una especie de filtro a los datos que se muestran en la
//  vista. En este caso, el pipe MiPipePersonalizadoPipe transforma el valor
//  que recibe a mayúsculas. Para utilizarlo, se añade el nombre del pipe en
//  la vista, seguido de un pipe (|) y el nombre del pipe personalizado.
//  Por ejemplo, {{ nombre | miPipePersonalizado }}.
//  Esto se hace sin cambiar los datos originales, simplemente se muestra el
//  valor transformado en la vista.

//lo compararia con una clase de .format en java, que se encarga de darle un
//  formato a un string, por ejemplo, para que se vea en mayusculas o en
//  minusculas.
