import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-exercise-results',
  templateUrl: 'exercise-results.html',
})
export class ExerciseResultsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveResults() {
    this.navCtrl.setRoot(TabsPage, {opentab: 0});
  }
}
