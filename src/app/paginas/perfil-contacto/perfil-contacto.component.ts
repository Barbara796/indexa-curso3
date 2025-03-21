import { Component, inject, Input, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contacto } from '../../componentes/contacto/contacto';
import { RouterLink } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-perfil-contacto',
  imports: [ ContainerComponent, RouterLink],
  templateUrl: './perfil-contacto.component.html',
  styleUrl: './perfil-contacto.component.css'
})
export class PerfilContactoComponent implements OnInit {

  @Input() id: string = '';
  contactoService = inject(ContactosService)

  contacto: Contacto = {
    id: 0,
    nombre: 'dev',
    telefono: '8888999999',
    email: 'dev@email.com',
    cumpleano: '12/10/1990',
    redes: ''
  }

  ngOnInit() {
    if(this.id){
      this.contactoService.buscarPorId(parseInt(this.id)).subscribe((contacto)=>{
        this.contacto = contacto;
      })
    }

  }

}
