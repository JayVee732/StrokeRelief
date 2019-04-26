import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

/**
 * TODO:
 * .push() is no longer supported, change the
 * BLuetooth connection.
 */
@Component({
  selector: 'app-bluetooth-connect',
  templateUrl: './bluetooth-connect.page.html',
  styleUrls: ['./bluetooth-connect.page.scss'],
  providers: [BLE],
})
export class BluetoothConnectPage implements OnInit {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;

  devices: any[] = [];
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private ble: BLE) {
    ble.enable();
  }

  ngOnInit() {
    this.scan();
  }

  scan() {
    // If this is enabled, the list is not display, will fix
    this.devices = [];
    this.ble.scan([], 5).subscribe(
      device => this.devices.push(device)
    );
  }

  onDeviceDiscovered(device) {
    console.log('Discovered' + JSON.stringify(device, null, 2));
    this.devices.push(device);
  }

  deviceSelected(device) {
    console.log(JSON.stringify(device) + 'selected');

    this.ble.connect(device.id).subscribe(
      peripheral => this.onConnected(peripheral)
    )
  }

  onConnected(peripheral) {
    // let alert = this.alertCtrl.create({
    //   title: 'Connected',
    //   message: 'Connected to ' + peripheral.name + '(' + peripheral.id + ')',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Disconnect',
    //       handler: () => {
    //         this.ble.disconnect(peripheral.id).then(
    //           () => console.log(peripheral.id + ' disconnected')
    //         );
    //       }
    //     }
    //   ]
    // });
    // alert.present();
  }
}
