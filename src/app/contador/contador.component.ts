import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contadorclic = 0;
  
  incrementador(){
    this.contadorclic++;
  }
  decrementador(){
    this.contadorclic--;
  }

}
