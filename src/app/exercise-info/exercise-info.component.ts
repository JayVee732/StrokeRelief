import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute } from '@angular/router';
/*
* TODO
* Use the bar-chart component properly and not reusing code in this component
*/
@Component({
  selector: 'app-exercise-info',
  templateUrl: './exercise-info.component.html',
  styleUrls: ['./exercise-info.component.css']
})
export class ExerciseInfoComponent implements OnInit {

  id: string;
  private sub: any;
  exercise: any;
  // ngIf data await for data from Firebase

  constructor(private storageService: StorageService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.storageService.getExerciseInfo(this.id).subscribe((exercise => {
        this.exercise = exercise;
        console.log(this.exercise);
      }));
    });
  }

  ngOnInit() {
  }

}
