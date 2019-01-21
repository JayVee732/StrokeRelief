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
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  myDate = new Date(); //Today's Date
  exercises: Exercises[];
  userID: string;

  exerciseName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private db: AngularFirestore, private storageProvider: StorageProvider) {
    this.userID = this.auth.getUser().uid;
    this.storageProvider.getExercises(this.userID).subscribe(items => {
      this.exercises = items
    });
  }

  sendData(menuItem) {
    
    console.log(menuItem);
    // Change this so that it updates rather than adds
    this.exerciseName = menuItem.ExerciseName;
    this.db.collection('exercise').add({
      "ExerciseName": this.exerciseName,
      "Complete": true,
      "Time": 10,
      "TimeTaken": 23,
      "UserID": this.userID,
      "Date": Date.now(),
    });
  }
}
