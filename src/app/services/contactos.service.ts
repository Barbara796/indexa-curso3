import { inject, Injectable } from '@angular/core';
import { Contacto } from '../componentes/contacto/contacto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})



export class ContactosService {

  private readonly API = "AGREGUE TÚ ENDPOINT AQUÍ";
  http = inject(HttpClient);
  

  obtenerContactos():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.API);
  }

  guardarContactos(contacto:Contacto){

  }
}


