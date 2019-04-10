import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  userExercise: any;
  displayExercise: any[];
  p: number = 1;
  exerciseAvg: any[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  @Input() id: string;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.getExerciseInfo(this.id).subscribe((userExerciseCol => {
      this.userExercise = userExerciseCol;
      for (let index = 0; index < this.userExercise.PullData.length; index++) {
        this.barChartLabels.push('Pull ' + (index + 1));
      }
      for (let index = 0; index < this.userExercise.HoldData.length; index++) {
        this.barChartLabels.push('Hold  ' + (index + 1));
      }
      this.barChartData = [
        { data: this.userExercise.PullData, label: 'Pull Data' },
        { data: this.userExercise.HoldData, label: 'Hold Time' }
      ];

      // I might need this?
      // this.userExercise.forEach(exercise => {
      //   console.log(exercise)
      //   let sum = exercise.PullData.reduce((previous, current) => current += previous);
      //   let avg = sum / exercise.PullData.length;
      //   console.log(avg)
      //   this.exerciseAvg.push(avg);
      // });
    }));
  }

  sortData() {
    for (var i = 0, len = this.userExercise.length; i < len; i++) {
      if (this.displayExercise.includes(this.userExercise[i].Date)) {
        // Finish this
      }
    };
  }
}
