import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones    : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";
  termino     : string = '';
  hayError    : boolean = false;
  paises      : Country[] = [];
  

  constructor( private PaisService: PaisService) { }

  getClaseCSS ( region: string ): string{
    return (region === this.regionActiva) //if
            ? 'btn btn-primary' //then
            : 'btn btn-outline-primary'; //else
  }
 
  activarRegion(region: string){

    if(region === this.regionActiva) {return};

    this.regionActiva = region;
    this.paises = [];

    this.buscar(region);

  }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;  
    
  
    this.PaisService.buscarRegion(this.termino)
    .subscribe({
      next: (paises)=>{ 
        this.paises = paises;
      },
      error: (err)=>{
        this.hayError = true;
        this.paises   = []; 
      }
      
    });
  
   }
  
   sugerencias(termino: string){
    this.hayError = false;
    //TODO crear sugerencias
   }

 
}
