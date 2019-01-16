import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { User } from '../user';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
/*=============================================
Delete this component and/or rename it to
ClientList since this name isn't good
enough
=============================================*/
export class ClientComponent implements OnInit {

  users: User[];
  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.getListOfUsers().subscribe(items =>  {
      console.log(items);
      this.users = items;
    });
  }
}
