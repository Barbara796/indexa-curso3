import { Component, input, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [ RouterLink],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  /* @Input() nombre: string = "";
  @Input() telefono: string = ""; */

  nombre = input<string>("");
  telefono = input<string>("");
  @Input() id:string = "";

}
