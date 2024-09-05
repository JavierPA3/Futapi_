import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  contactForm: FormGroup;
  statusMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post('https://formspree.io/f/xzbnlbvl', formData, {
        headers: {
          'Accept': 'application/json'
        }
      }).subscribe(
        response => {
          this.statusMessage = 'Gracias por contactar con FutApi, pronto nos pondremos en contacto con usted.';
          this.contactForm.reset();
        },
        error => {
          if (error.error && error.error.errors) {
            this.statusMessage = error.error.errors.map((e: any) => e.message).join(', ');
          } else {
            this.statusMessage = 'Ha ocurrido un error al enviar el formulario.';
          }
        }
      );
    } else {
      this.statusMessage = 'Por favor, complete correctamente el formulario.';
    }
  }
}
