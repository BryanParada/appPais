import { Component } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  termino: string = '';
 
  buscar(){
    console.log('Hola Mundo');
    
  }
 

}
