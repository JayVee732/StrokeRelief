import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { BluetoothDataService } from '../services/bluetooth-data/bluetooth-data.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage {
  currentPull: number;
  currentReps: number = 0;
  exercise: any;
  repsLeft: number = 1;
  totalReps: number = 1;
  pullData: number[] = [];

  timer: number = 0;
  interval: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private bluetoothData: BluetoothDataService) {
    this.exercise = navParams.get('data');
    this.repsLeft = this.exercise.NumOfReps;
    this.totalReps = this.exercise.NumOfReps;
    // this.pullData = Array.from({ length: 10 }, (x, i) => 0);
  }

  // startTimer() {
  //   // Sort out the fact that the start button can be pressed
  //   // over and over again
  //   this.interval = setInterval(() => {
  //     this.timer++;
  //   }, 1000);
  // }

  pauseTimer() {
    clearInterval(this.interval);
  }

  input() {
    // Get a data for the pull and clear the data after
    this.currentPull = 0;
    this.currentPull = this.bluetoothData.pull();
    //this.pullData.shift();
    this.pullData.push(this.currentPull);

    this.repsLeft--;

    // if (this.repsLeft == 0) {
    //   this.navCtrl.push(ExerciseResultsPage, {
    //     exerciseData: this.exercise,
    //     pull: this.pullData,
    //     timeTaken: this.timer
    //   });
    // }
  }

}
