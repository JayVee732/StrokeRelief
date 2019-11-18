import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from '../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-results',
  templateUrl: './exercise-results.page.html',
  styleUrls: ['./exercise-results.page.scss'],
})
export class ExerciseResultsPage {
  exercise: any;
  pullData: number[] = [];
  timeTaken: number;
  holdTime: number[] = [];

  constructor(public navCtrl: NavController, public data: DataService, private db: AngularFirestore, public router: Router) {
    this.exercise = data.paramData.exerciseData;
    this.pullData = data.paramData.pull;
    this.timeTaken = data.paramData.timeTaken;
    this.holdTime = data.paramData.holdTime;
  }

  saveResults() {
    this.sendData();
    this.router.navigateByUrl("/tabs/home")
  }

  sendData() {
    this.db.doc('exercise/' + this.exercise.id).update({
      "Complete": true,
      "TimeTaken": this.timeTaken,
      "PullData": this.pullData,
      "DateCompleted": Date.now(),
      "HoldData": this.holdTime,
    });
  }
}
