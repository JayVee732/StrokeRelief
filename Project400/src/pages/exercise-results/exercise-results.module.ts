import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseResultsPage } from './exercise-results';

@NgModule({
  declarations: [
    ExerciseResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciseResultsPage),
  ],
})
export class ExerciseResultsPageModule {}
