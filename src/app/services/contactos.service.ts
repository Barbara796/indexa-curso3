import { inject, Injectable } from '@angular/core';
import { Contacto } from '../componentes/contacto/contacto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})



export class ContactosService {

  private readonly API = "https://67dc2a171fd9e43fe4777b22.mockapi.io/contactos";
  http = inject(HttpClient);
  

  obtenerContactos():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.API);
  }

  guardarContactos(contacto:Contacto){
    return this.http.post<Contacto>(this.API, contacto)
  }

  buscarPorId(id:number):Observable<Contacto>{
    const url = `${this.API}/${id}`
    return this.http.get<Contacto>(url);
  }
}


