import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoonService {


   private API_URL = 'https://www.obuma.cl/ayuda/api-integracion/productos';



     constructor(private http: HttpClient) {}

     getAPOD(): Observable<any[]>{
      console.log(this.API_URL);

       return this.http.get<any[]>(this.API_URL).pipe( catchError((error) => {
         console.error('Error al obtener datos APOD:', error);
        return throwError(error);
      })
   );
      }

  }

