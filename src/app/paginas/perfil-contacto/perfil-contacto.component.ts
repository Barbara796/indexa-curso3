import { Component, inject, Input, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contacto } from '../../componentes/contacto/contacto';
import { Router, RouterLink } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-perfil-contacto',
  imports: [ ContainerComponent, RouterLink, SeparadorComponent],
  templateUrl: './perfil-contacto.component.html',
  styleUrl: './perfil-contacto.component.css'
})
export class PerfilContactoComponent implements OnInit {

  @Input() id: string = '';
  contactoService = inject(ContactosService);
  router = inject(Router);

  contacto: Contacto = {
    id: 0,
    nombre: 'dev',
    telefono: '8888999999',
    email: 'dev@email.com',
    avatar: "",
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

  borrar(){
    this.contactoService.borrarContacto(this.contacto.id).
      subscribe(()=> this.router.navigateByUrl('/lista-contactos'))
  }

}
