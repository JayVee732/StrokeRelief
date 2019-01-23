import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../user';
import { StorageService } from '../services/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  uid: string;
  users: User[];
  id: string = '';

  constructor(private storageService: StorageService, private auth: AuthService, private afa: AngularFireAuth) { }

  ngOnInit() {
    // this.afa.auth.onAuthStateChanged(user =>{
    //   if(user) {
    //     this.uid = user.uid;
    //   }
    // })

    // this.storageService.getUser(this.uid).subscribe((user => {
    //   this.user = user;
    // }));
    this.storageService.getListOfUsers().subscribe(items => {
      this.users = items;
    });
  }

  logOut() {
    this.auth.logOut();
  }
}
