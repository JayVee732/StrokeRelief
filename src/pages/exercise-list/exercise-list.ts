import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Exercises } from '../../Exercises';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * TODO:
 * User feedback to let them know that it has sent data.
 */

@IonicPage()
@Component({
  selector: 'page-exercise-list',
  templateUrl: 'exercise-list.html',
})
export class ExerciseListPage {

  myDate = new Date(); //Today's Date
  exercises: Exercises[];
  userID: string;

  exerciseName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private db: AngularFirestore, private storage: StorageProvider) {
    this.userID = this.auth.getUser().uid;
    this.storage.getExercises(this.userID).subscribe(items => {
      this.exercises = items
    });
  }

  sendData(menuItem) {    
    this.db.doc('exercise/' + menuItem.id).update({
      "Complete": true,
      "TimeTaken": 23,
      "DateCompleted": Date.now()
    });
  }
}
