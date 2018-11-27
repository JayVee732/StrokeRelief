import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Form } from '../form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  state: string = '';
  error: any;
  form: Form;

  email: string;
  password: string;
  firstName: string;
  surname: string;
  addressLine1: string;
  addressLine2: string;
  county: string;
  phoneNumber: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    // Add interface for form data
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.firstName = formData.value.firstName;
      this.surname = formData.value.surname;
      this.addressLine1 = formData.value.addressLine1;
      this.addressLine2 = formData.value.addressLine2;
      this.county = formData.value.county;
      this.phoneNumber = formData.value.phoneNumber;

      this.form = {
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        surname: this.surname,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        county: this.county,
        phoneNumber: this.phoneNumber
      };
      console.log(formData.valid);
      console.log(this.form);
      this.authService.createNewUserWithEmailAndPassword(this.form);
    }
  }
}
