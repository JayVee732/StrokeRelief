import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BluetoothDataProvider {

  currentPull: number
  min: number = 80;
  max: number = 100;
  constructor(public http: HttpClient) {
    
  }

  pull() {
    // Get a value between 80 and 100
    this.currentPull = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}
