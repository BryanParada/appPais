import { Component } from '@angular/core';

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

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";

  constructor() { }

  getClaseCSS ( region: string ): string{
    return (region === this.regionActiva) //if
            ? 'btn btn-primary' //then
            : 'btn btn-outline-primary'; //else
  }
 
  activarRegion(region: string){
    this.regionActiva = region;

    //TODO: hacer llamado al servicio
  }

 
}
