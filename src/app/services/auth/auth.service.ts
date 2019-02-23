import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthProvider {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
      }
    });
  }

  signInWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  getUser() {
    return this.user;
  }

}
