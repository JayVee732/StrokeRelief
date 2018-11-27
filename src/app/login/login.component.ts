import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  state: string = '';
  error: any;

  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.auth.loginUserWithEmailAndPassword(this.email, this.password);
    }
  }
}
