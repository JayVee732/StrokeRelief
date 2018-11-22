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

  createClientLogin(firstName, surname, addressLine1, AddressLine2, county, uid, email, phoneNumber) {
    this.post = {
      "FirstName": firstName,
      "Surname": surname,
      "AddressLine1": addressLine1,
      "AddressLine2": AddressLine2,
      "County": county,
      "PhoneNumber": phoneNumber,
      "UserID": uid,
      "Email": email,
      "UserRole": "Client"
    };
    return this.post;
  }

  createNewUserWithEmailAndPassword(email: string, password: string, firstName: string, surname: string, addressLine1: string, addressLine2: string, county: string, phoneNumber: string) {
    this.afa.auth.createUserWithEmailAndPassword(email, password)
      .then(
        (success) => {
          this.afa.authState.subscribe((resp) => {
            if (resp != null) {
              if (resp.uid) {
                // Look into why this returns false HTTP 401
                this.storage.sendPostRequestNewUser(this.createClientLogin(firstName, surname, addressLine1, addressLine2, county, resp.uid, email, phoneNumber));
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
