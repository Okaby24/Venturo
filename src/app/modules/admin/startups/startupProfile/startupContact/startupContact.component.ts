import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-startupContact',
  templateUrl: './startupContact.component.html',
  styleUrls: ['./startupContact.component.css'],
  imports: [CommonModule , FormsModule]
})
export class StartupContactComponent implements OnInit {

    appointment = {
    name: '',
    email: '',
    phone: '',
    dateTime: '',
    message: ''
  };

  submitAppointment() {
    console.log('Appointment submitted', this.appointment);
    alert('Appointment request submitted successfully!');
    // Here you can call your API to save the appointment
    this.appointment = { name: '', email: '', phone: '', dateTime: '', message: '' };
  }



  constructor() { }

  ngOnInit() {
  }

}
