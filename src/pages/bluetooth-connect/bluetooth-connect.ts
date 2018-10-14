import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";

/**
 * Generated class for the BluetoothConnectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bluetooth-connect',
  templateUrl: 'bluetooth-connect.html',
})
export class BluetoothConnectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private bluetoothSerial: BluetoothSerial) {
    bluetoothSerial.enable();
  }

  Scan() {
    
  }
}
