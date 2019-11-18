import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { User } from '../user';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  users: User[];
  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.getListOfUsers('Client').subscribe(items => {
      this.users = items;
    });
  }
}
