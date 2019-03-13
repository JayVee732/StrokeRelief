import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SettingsProvider {

  constructor(private auth: AuthProvider, public navCtrl: NavController) {
  }

  logout() {
    this.auth.signOut();
    this.navCtrl.navigateForward("/login");
  }
}
