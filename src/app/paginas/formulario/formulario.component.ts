import { Component, inject, Input, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-formulario',
  imports: [ContainerComponent, 
            SeparadorComponent,
            ReactiveFormsModule,
            CommonModule,
            RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  //forma individual
  //nombre = new FormControl('Barbara');
  contactoForm!: FormGroup;
  fb = inject(FormBuilder);
  contactoService = inject(ContactosService);
  router = inject(Router);
  @Input() id:string = "";

 

  ngOnInit(){
    this.inicializarForms();
    this.cargarContacto();
  }

  inicializarForms(){
    this.contactoForm = this.fb.group({
      nombre: ['',Validators.required],
      telefono: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      avatar: ['', Validators.required],
      cumpleano: [''],
      redes: [''],
      observaciones: [''],
    })
  }


  //gestion de forms con formgroup
  /* inicializarForms(){
    this.contactoForm = new FormGroup({
      nombre: new FormControl('',Validators.required),
      telefono: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      cumpleano: new FormControl(''),
      redes: new FormControl(''),
      observaciones: new FormControl(''),
    })
  } */

  guardarContacto(){
      const nuevoContacto = this.contactoForm.value;
 
     nuevoContacto.id = this.id ? parseInt(this.id) : null;
 
      this.contactoService.editarOGuardarContacto(nuevoContacto).subscribe(()=>{
       this.contactoForm.reset();
       this.router.navigateByUrl('/lista-contactos');
      });
   }

   cargarContacto(){
    if (this.id) {
      this.contactoService.buscarPorId(parseInt(this.id)).subscribe((contacto) => {
        this.contactoForm.patchValue(contacto)
      });
    } 
  }

  cancelar(){
    this.contactoForm.reset();
    this.router.navigateByUrl('/lista-contactos');
  }

  seleccionarArchivo(event: any){
    const file : File = event.target.files[0];
    if(file){
      this.leerArchivo(file)
    }
  }

  leerArchivo(file: File){
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.result){
        this.contactoForm.get('avatar')?.setValue(reader.result as string)
      }
    }

    reader.readAsDataURL(file)
    console.log("la imagen fue agregada")
  }
}
