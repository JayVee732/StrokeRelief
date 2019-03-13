import { Component } from '@angular/core';
import { ExercisePage } from '../exercise/exercise.page';
import { NavController } from '@ionic/angular';
import { AuthProvider } from '../services/auth/auth.service';
import { StorageProvider } from '../services/storage/storage.service';
import { Exercises } from '../Exercise';

/**
 * TODO:
 * User feedback to let them know that it has sent data.
 */
@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.page.html',
  styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage {

  //myDate = new Date(); //Today's Date
  exercises: Exercises[];
  userID: string;

  exerciseName: string;

  constructor(public navCtrl: NavController, private auth: AuthProvider, private storage: StorageProvider) {
    this.userID = this.auth.getUser().uid;
    console.log(this.userID);
    this.storage.getExercises(this.userID).subscribe(items => {
      this.exercises = items
    });
  }
  
  // switchTab(exercise){
  //   this.navCtrl.push(ExercisePage, {
  //     data: exercise 
  //   });
  // }

}
