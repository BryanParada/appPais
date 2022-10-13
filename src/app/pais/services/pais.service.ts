import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1/";
  private apiUrlv2: string = "https://restcountries.com/v2/";

  get httpParams (){
 
     // Como retornar menos datos
     return new HttpParams()
     //?fields=name,capital,currencies  --- v es lo mismo
           .set('fields', 'name,capital,currencies'); 

    //para llamar metodo
    //return this.http.get<Country[]>(url, {params: this.httpParams});    

  }

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Country[]>(url);

  }

  buscarCapital(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<Country[]>(url);

  }

  getPaisPorID(id: string): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`

    return this.http.get<Country>(url);

  }

  buscarRegion(region: string): Observable<Country[]>{

   

    const url = `${this.apiUrl}/region/${region}`

    return this.http.get<Country[]>(url);

  }

}
