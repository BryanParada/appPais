import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface'; 

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino : string = 'Chile';
  hayError: boolean = false;
  paises  : Country[] = [];

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

 buscar( termino: string){
  this.hayError = false;
  this.termino = termino; 

  this.PaisService.buscarPais(this.termino)
  .subscribe({
    next: (paises)=>{
      console.log(paises); 
      this.paises = paises;
    },
    error: (err)=>{
      this.hayError = true;
      this.paises   = [];
      console.log("Error!");
      console.info(err);
    }
    
  });

 }



}
