import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';
import { EstiloHermanosDirective } from '../estilo-hermanos.directive';
import { MiPipePersonalizadoPipe } from '../mi-pipe-personalizado.pipe';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [EstiloHermanosDirective,MiPipePersonalizadoPipe],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit {

    nombre? : string;
    constructor(
      private _servicioFamiliar : ServicioFamiliarService
    ) { 
      
    }
    
  
    ngOnInit(): void {
        this._servicioFamiliar.setHermanoPequeño('Pedro');
        this.nombre = this._servicioFamiliar.getHermanoPequeño();
    }

    saludar(){
      this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
    }

    preguntar(){
      console.log(this._servicioFamiliar.preguntarPorHijo()); 
    }

}
