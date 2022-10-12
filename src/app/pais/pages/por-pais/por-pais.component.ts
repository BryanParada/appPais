import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = 'hola mundo';

  constructor( private PaisService: PaisService) { }

  buscar(){
    console.log(this.termino);

    this.PaisService.buscarPais(this.termino)
    .subscribe( resp => {
      console.log(resp);
      
    });
    
 }

}
