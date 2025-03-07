import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./padre/padre.component";
import { ContadorComponent } from "./contador/contador.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-angular';
}
