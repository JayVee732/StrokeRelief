import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BluetoothDataProvider } from '../../providers/bluetooth-data/bluetooth-data'
import { AngularFirestore } from '@angular/fire/firestore';
import { ExerciseResultsPage } from '../exercise-results/exercise-results';

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {
  currentPull: number;
  timer: number = 0;
  interval: number;
  totalReps: number = 0;
  currentReps: number = 0;

  constructor(public navCtrl: NavController, private db: AngularFirestore) {
    // this.startTimer();
  }

  sendData(menuItem) {
    this.db.doc('exercise/' + menuItem.id).update({
      "Complete": true,
      "TimeTaken": 23,
      "DateCompleted": Date.now()
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timer++;
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  switchTab() {
    // Make sure that currentReps and totalReps can't
    // be equal to 0, only done here to test naigation
    if (this.currentReps == this.totalReps) {
      this.navCtrl.push(ExerciseResultsPage);
    }
  }
}
