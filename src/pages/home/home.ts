import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { AuthProvider } from '../../providers/auth/auth';
import { Exercises } from '../../Exercises';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myDate = new Date(); //Today's Date
  exercises: Exercises[];
  userID: string;

  exerciseName: string;

  constructor(public navCtrl: NavController, private storage: StorageProvider, private auth: AuthProvider) {
    this.userID = this.auth.getUser().uid;
    this.storage.getExercises(this.userID).subscribe(items => {
      this.exercises = items
    });
  }

  toggleSettings(item) {
    this.navCtrl.push(SettingsPage, {
      item: item
    });
  }

  switchTab(){
    this.navCtrl.parent.select(1);
  }


}
