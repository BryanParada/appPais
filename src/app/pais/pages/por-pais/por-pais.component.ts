import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = 'hola mundo';
  hayError: boolean = false

  constructor( private PaisService: PaisService) { }

  buscarDeprecated(){
    this.hayError = false;
    console.log(this.termino);

    this.PaisService.buscarPais(this.termino)
    .subscribe( paises => {
      console.log(paises);
      
    }, (err) => {
      this.hayError = true;
      console.log("Error!");
      console.info(err);
             
    }); 
 }

 buscar(){
  this.hayError = false;
  console.log(this.termino);
  
  this.PaisService.buscarPais(this.termino)
  .subscribe({
    next: (paises)=>{
      console.log(paises); 
    },
    error: (err)=>{
      this.hayError = true;
      console.log("Error!");
      console.info(err);
    }
    
  });

 }



}
