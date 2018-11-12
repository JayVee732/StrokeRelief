import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afa: AngularFireAuth) {  }

  createNewUserWithEmailAndPassword(email: string, password: string) {
    this.afa.auth.createUserWithEmailAndPassword(email, password)
      .then(
        (success) => {
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
}
