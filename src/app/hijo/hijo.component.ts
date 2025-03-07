import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  // Este es el mensaje recibido de padre
  @Input() recibeHijo: string = '';

  //Mensaje que se enviara
  @Output() mensajeDesdeHijo = new EventEmitter<string>();

  mensaje: string = ''

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje)
  }
  // para hacer lo botones de contador en hijos debemos crear dos EventEmitters
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

  // estos van a emitir para que el padre se encargue
  incrementar(){
    this.incrementarDesdeHijo.emit();

  }
  decrementar(){
    this.decrementarDesdeHijo.emit();

  }

}
