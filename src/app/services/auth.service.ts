import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from './storage.service';
import { Form } from '../form';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  private currentUser: Observable<firebase.User>;
  post: any;
  authState: any = null;

  constructor(private router: Router, private afAuth: AngularFireAuth, private storage: StorageService) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      let key = 'LoggedIn';
      if (auth) {
        sessionStorage.setItem(key, 'Logged'); // Change to cookie
      }
    })
  }
  
  canActivate(): boolean{
    let myItem = sessionStorage.getItem('LoggedIn');
    if (myItem == "Logged") {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  createNewUserWithEmailAndPassword(form: Form) {
    this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password)
      .then(
        (success) => {
          this.afAuth.authState.subscribe((resp) => {
            if (resp != null) {
              if (resp.uid) {
                this.storage.sendPostRequestNewUser(form.firstName, form.surname, form.addressLine1, form.addressLine2, form.county, resp.uid, form.email, form.phoneNumber);
              }
            }
          })
          this.router.navigate(['/login'])
        })
      .catch(
        (err) => {
          this.router.navigate(['/login'])
        }
      );
  }

  loginUserWithEmailAndPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        (success) => {
          this.authState = success;
          this.router.navigate(['/home']);
        })
      .catch(
        (err) => {
          this.authState = err;
        }
      );
  }

  logOut() {
    sessionStorage.removeItem('LoggedIn');
    this.afAuth.auth.signOut()
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    if (this.currentUser == null) {
      return false;
    }
    return true;
  }
}
