import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande():string{
    return this.hermanoGrande || '';
  }

  setHermanoGrande(hermano: string){
    this.hermanoGrande = hermano;
  }

  getHermanoPequeño():string{
    return this.hermanoPequeño || '';
  }

  setHermanoPequeño(hermano: string){
    this.hermanoPequeño = hermano;
  }

  saludar(hermano: string){
    console.log("Hola " + hermano);
  }

  preguntarPorHijo():string{
    return "¿Cómo está tu hijo?";
  }

  constructor() { }
}

//Los servicios son clases que se encargan de realizar tareas específicas
//  y que pueden ser compartidas por varios componentes.
//  Se utilizan para centralizar la lógica de la aplicación y para evitar la
//  duplicación de código.
//  En este caso, el servicio ServicioFamiliarService se encarga de gestionar
//  la información de los hermanos y de realizar
//  algunas operaciones con ellos, como saludar o preguntar por el hijo de
//  un hermano.
// Es una manera de comunicacion entre los componentes. Se puede utilizar
//  para compartir datos entre componentes, para realizar operaciones comunes
//  o para realizar peticiones a un servidor.