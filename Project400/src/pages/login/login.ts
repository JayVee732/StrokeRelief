import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginError: string;
  email: string;
  password: string;

  constructor(private navCtrl: NavController, private auth: AuthProvider) {
    /*this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });*/
  }

  /*login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot(TabsPage),
        error => this.loginError = error.message
      );
  }*/

  onSubmit(formData) {
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.auth.signInWithEmail(this.email, this.password)
        .then(
          () => this.navCtrl.setRoot(TabsPage),
          error => this.loginError = error.message
        );
    }
  }

}
