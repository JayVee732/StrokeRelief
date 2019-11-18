import { Component } from '@angular/core';
import { BluetoothDataService } from '../services/bluetooth-data/bluetooth-data.service';
import { DataService } from "../services/data/data.service";
import { Router } from '@angular/router';

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
  holdData: number[] = [];
  pullObject: any;

  timer: number = 0;
  interval: any;
  holdTime: number;

  constructor(public router: Router, public data: DataService, private bluetoothData: BluetoothDataService) {
    // this.exercise = navParams.get('data');
    // this.repsLeft = this.exercise.NumOfReps;
    // this.totalReps = this.exercise.NumOfReps;
    // this.pullData = Array.from({ length: 10 }, (x, i) => 0);

    this.exercise = data.paramData;
    this.repsLeft = this.exercise.NumOfReps;
    this.totalReps = this.exercise.NumOfReps;
  }

  startTimer() {
  // Sort out the fact that the start button can be pressed
  // over and over again
    this.interval = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  input() {
    // Get a data for the pull and clear the data after
    this.currentPull = 0;
    // this.currentPull = this.bluetoothData.pull();
    this.pullObject = this.bluetoothData.pull();
    this.currentPull = this.pullObject.randomPull;
    this.holdTime = this.pullObject.holdTime;
    //this.pullData.shift();
    this.pullData.push(this.currentPull);
    this.holdData.push(this.holdTime);

    this.repsLeft--;

    if (this.repsLeft == 0) {
      this.data.paramData = {
        exerciseData: this.exercise,
        pull: this.pullData,
        timeTaken: this.timer,
        holdTime: this.holdData,
      };
    this.router.navigateByUrl("/exercise-results");
    }
  }
}
