import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userInfo: string;

  constructor(private auth: AuthService, private storage: StorageService) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logOut();
  }  
}
