import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  state: string = '';
  error: any;

  email: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.authState) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.auth.loginUserWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/home']);
    }
  }
}
