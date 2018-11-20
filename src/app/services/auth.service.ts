import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: Observable<firebase.User>;
  post: any;

  constructor(private router: Router, private afa: AngularFireAuth, private storage: StorageService) {
    this.currentUser = afa.authState;
  }

  populatePost(uid, email) {
    this.post ={
      "UserID": uid,
      "Email": email
    };
    return this.post;
  }

  createNewUserWithEmailAndPassword(email: string, password: string) {
    this.afa.auth.createUserWithEmailAndPassword(email, password)
      .then(
        (success) => {
          this.afa.authState.subscribe((resp) => {
            if (resp != null) {
              if (resp.uid) {
                this.storage.sendPostRequestNewUser(this.populatePost(resp.uid, email), resp.uid);
              }
            }
          })
          console.log(success);
          this.router.navigate(['/login'])
        })
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }

  loginUserWithEmailAndPassword(email: string, password: string) {
    this.afa.auth.signInWithEmailAndPassword(email, password)
      .then(
        (success) => {
          console.log(success);
          this.router.navigate(['/user'])
        })
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }

  logOut() {
    this.afa.auth.signOut()
      .then(() => this.router.navigate(['/login']));
  }

  isLoggedIn() {
    if (this.currentUser == null){
      console.log(this.currentUser);
      return false;
    }
    return true;
  }
}
