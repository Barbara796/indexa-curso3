import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensaje-error',
  imports: [],
  templateUrl: './mensaje-error.component.html',
  styleUrl: './mensaje-error.component.css'
})
export class MensajeErrorComponent {
  @Input() control!: FormControl;

}
