import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFirestore } from '@angular/fire/firestore';

@IonicPage()
@Component({
  selector: 'page-exercise-results',
  templateUrl: 'exercise-results.html',
})
export class ExerciseResultsPage {
  exercise: any;
  pullData: number[] = [];
  timeTaken: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFirestore) {
    this.exercise = navParams.get('exerciseData');
    this.pullData = navParams.get('pull');
    this.timeTaken = navParams.get('timeTaken');
    console.log(this.pullData);
  }

  saveResults() {
    this.sendData();
    this.navCtrl.setRoot(TabsPage, {opentab: 0});
  }

  sendData() {
    this.db.doc('exercise/' + this.exercise.id).update({
      "Complete": true,
      "TimeTaken": this.timeTaken,
      "PullData": this.pullData,
      "DateCompleted": Date.now()
    });
  }
}
