import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Exercises } from '../../Exercises';
import { StorageProvider } from '../../providers/storage/storage';
import { ExercisePage } from '../exercise/exercise';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, private storage: StorageProvider) {
    this.userID = this.auth.getUser().uid;
    this.storage.getExercises(this.userID).subscribe(items => {
      this.exercises = items
    });
  }
  
  switchTab(exercise){
    this.navCtrl.push(ExercisePage, {
      data: exercise 
    });
  }
}
