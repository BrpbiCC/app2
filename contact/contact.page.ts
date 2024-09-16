import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactName: string = '';
  email: string = '';
  phone: string = '';
  query: string = '';

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log('Formulario enviado', this.contactName, this.email, this.phone, this.query);
    // Aquí podrías manejar el envío del formulario, ya sea guardarlo en una base de datos o enviarlo por email.
  }
}

