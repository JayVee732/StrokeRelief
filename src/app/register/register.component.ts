import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.createNewUserWithEmailAndPassword(formData.value.email, formData.value.password);
    }
  }
}
