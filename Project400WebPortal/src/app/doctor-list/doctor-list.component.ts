import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { User } from '../user';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: User[];
  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.getListOfUsers('Doctor').subscribe(users => {
      this.doctors = users;
    });
  }

}
