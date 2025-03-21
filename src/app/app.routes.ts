import { Routes } from '@angular/router';
import { ListaContactosComponent } from './paginas/lista-contactos/lista-contactos.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { PerfilContactoComponent } from './paginas/perfil-contacto/perfil-contacto.component';

export const routes: Routes = [
    { path:'lista-contactos', component: ListaContactosComponent},
    { path: 'formulario', component:FormularioComponent},
    {path:'', redirectTo:'lista-contactos', pathMatch:'full'},
    {path:'perfil-contacto/:id', component:PerfilContactoComponent}
    
];
