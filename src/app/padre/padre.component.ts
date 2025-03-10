import { Component, inject, OnInit } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from '../mi-pipe-personalizado.pipe';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [
    HijoComponent,
    EstiloHermanosDirective, 
    MiPipePersonalizadoPipe, 
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe
  ],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit {

  nombre? : string;
  fecha : Date = new Date();
  euro : number = 20;
  numero: number = 2;
  decimal: number = 0.2567;

  // constructor(
  //   private _servicioFamiliar : ServicioFamiliarService
  // ) {}
  // A partir de angular 15, se empezo a utilizar el injector:

  private _servicioFamiliar2 = inject (ServicioFamiliarService);
  

  ngOnInit(): void {
      this._servicioFamiliar2.setHermanoGrande('Juan');
      this.nombre = this._servicioFamiliar2.getHermanoGrande();
  }

  saludar(){
    this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoPequeño() || '');

  }
  preguntar(){
    console.log(this._servicioFamiliar2.preguntarPorHijo()); 
  }


  

}
