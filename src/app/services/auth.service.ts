import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service';
import { Form } from '../form';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: Observable<firebase.User>;
  post: any;

  constructor(private router: Router, private afa: AngularFireAuth, private storage: StorageService) {
    this.currentUser = afa.authState;
  }

  createNewUserWithEmailAndPassword(form: Form) {
    console.log(form);
    this.afa.auth.createUserWithEmailAndPassword(form.email, form.password)
      .then(
        (success) => {
          this.afa.authState.subscribe((resp) => {
            if (resp != null) {
              if (resp.uid) {
                // Look into why this returns false HTTP 401
                this.storage.sendPostRequestNewUser(form.firstName, form.surname, form.addressLine1, form.addressLine2, form.county, resp.uid, form.email, form.phoneNumber);
              }
            }
          })
          console.log(success);
          this.router.navigate(['/login'])
        })
      .catch(
        (err) => {
          console.log(err);
          this.router.navigate(['/login'])
        }
      )
  }

  loginUserWithEmailAndPassword(email: string, password: string) {
    this.afa.auth.signInWithEmailAndPassword(email, password)
      .then(
        (success) => {
          console.log(success);
          this.router.navigate(['/home'])
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
    if (this.currentUser == null) {
      console.log(this.currentUser);
      return false;
    }
    return true;
  }
}
