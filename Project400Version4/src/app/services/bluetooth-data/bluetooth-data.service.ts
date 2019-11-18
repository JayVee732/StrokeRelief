import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BluetoothDataService {

  currentPull: number
  min: number = 70;
  max: number = 100;
  randomPull: number;
  holdTime: number;
  returnObject: any;
  constructor() { }

  pull() {
    // Get a value between 80 and 100
    this.randomPull = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.holdTime = Math.floor(Math.random() * (1 - 6)) + 5;
    this.returnObject = {
      randomPull: this.randomPull, 
      holdTime: this.holdTime};
    return this.returnObject;
  }
}
