import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private settings: SettingsProvider) {
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
}
