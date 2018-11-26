import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFirestore } from '@angular/fire/firestore';

/**
 * Generated class for the ExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private db: AngularFirestore) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }

  sendData() {
    let id = this.auth.getUser();
    this.db.collection('/exerciseResults').add({
      "ExerciseName": "10 Reps",
      "TimeTaken": 23,
      "UserID":  id
    });
  }
}
