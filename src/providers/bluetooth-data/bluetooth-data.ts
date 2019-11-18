import { Injectable } from '@angular/core';

@Injectable()
export class BluetoothDataProvider {

  currentPull: number
  min: number = 80;
  max: number = 100;
  constructor() { }

  pull() {
    // Get a value between 80 and 100
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
