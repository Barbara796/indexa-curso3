import { inject, Injectable } from '@angular/core';
import { Contacto } from '../componentes/contacto/contacto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})



export class ContactosService {

  private readonly API = "AGREGUE EL ENDPOINT DE TU API ACÁ";
  http = inject(HttpClient);
  

  obtenerContactos():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.API);
  }

  guardarContactos(contacto:Contacto){
    return this.http.post<Contacto>(this.API, contacto)
  }

  buscarPorId(id: number): Observable<Contacto> {
    const url = `${this.API}/${id}`
    return this.http.get<Contacto>(url)
  }

  borrarContacto(id: number): Observable<Contacto> {
    const url = `${this.API}/${id}`
    return this.http.delete<Contacto>(url)
  }

  editarContacto(contacto: Contacto): Observable<Contacto> {
    const url = `${this.API}/${contacto.id}`
    return this.http.put<Contacto>(url,contacto)
  }

  editarOGuardarContacto(contacto: Contacto): Observable<Contacto>{
      if(contacto.id){
        return this.editarContacto(contacto);
      }
      else {
        return this.guardarContactos(contacto);
      }
  }
}


