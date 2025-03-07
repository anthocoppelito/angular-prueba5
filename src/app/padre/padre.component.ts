import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  //aqui se manda mensaje a hijo
  mensajePadre = 'Yo soy tu padre';

  // aqui se recibe el mensaje del hijo
  mensajeRecibido: string ='';

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }

  //contador padre
  contador = 0;
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }

}
