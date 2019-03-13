import { Component } from '@angular/core';
import { AuthProvider } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginError: string;
  email: string;
  password: string;

  constructor(private auth: AuthProvider, public router: Router) {
    /*this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });*/
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.auth.signInWithEmail(this.email, this.password)
        .then(
          () => this.router.navigateByUrl("/tabs/home"),
          error => this.loginError = error.message
        );
    }
  }
}
