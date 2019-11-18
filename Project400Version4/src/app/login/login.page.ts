import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AuthProvider } from '../services/auth/auth.service';
import { Router } from '@angular/router';

/**
 * TODO:
 * Work on adding formgroups and validation for user inputs
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginError: string;
  email: string;
  password: string;
  public loading: HTMLIonLoadingElement;

  constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, private auth: AuthProvider, public router: Router) {
    /*this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });*/
  }

  async onSubmit(formData): Promise<void> {
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.auth.signInWithEmail(this.email, this.password)
        .then(
          () => {
            this.router.navigateByUrl("/tabs/home")
          },
          error => this.loginError = error.message
        );
    }
  }
}
