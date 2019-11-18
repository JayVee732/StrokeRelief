import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  selectedTheme: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, private settings: SettingsProvider, private auth: AuthProvider, public storage: Storage) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  toggleTheme() {
    if (this.selectedTheme == "ionic.theme.dark") {
      this.settings.setActiveTheme("ionic.theme.default");
    }
    else {
      this.settings.setActiveTheme("ionic.theme.dark");
    }
  }

  logout() {
    this.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  getName() {
    this.storage.ready().then(() => {
      this.storage.get('name').then((name) => {
        alert("Hey " + name + "!");
      });
    })
  }

  setName() {
    this.storage.ready().then(() => {
      this.storage.set('name', 'Jamie');
    })
  }
}
