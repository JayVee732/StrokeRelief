import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  signInWithEmail(email: string, password: string) {
    console.log('Sign in with email');
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
