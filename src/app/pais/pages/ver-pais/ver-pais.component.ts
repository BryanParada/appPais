import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from "rxjs";
import { Idd } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe( ({id})  =>{
    //     console.log( id );

    //     this.paisService.getPaisPorID(id)
    //       .subscribe(pais =>{
    //         console.log(pais);
            
    //       });
        
    //   })

    this.activatedRoute.params
        .pipe(
          switchMap( (param) => this.paisService.getPaisPorID(param['id']) )
        )
        .subscribe(resp =>{
          console.log(resp);
          
        });


  }

}
