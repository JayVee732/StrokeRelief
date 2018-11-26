import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  toggleSettings(item) {
    this.navCtrl.push(SettingsPage, {
      item: item
    });
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
