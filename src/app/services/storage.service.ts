import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private firebaseURL: string = environment.firebase.databaseURL;
  private uid: string = '';

  constructor(private router: Router, private http: HttpClient, private afa: AngularFireAuth, private db: AngularFirestore) {
    this.getUID();
  }

  //Post new user to the database
  sendPostRequestNewUser(postData: any, user: string) {
    this.db.collection('users').add({
      postData
    });
    this.router.navigate(['../user']);
  }

  // Get user information
  getUserInfo(): Observable<any> {
    return this.http.get(this.firebaseURL + 'users/' + this.uid + '.json');
  }

  getUID() {
    this.afa.authState.subscribe((resp) => {
        if (resp != null) {
            //As long as it is a vaild user ID
            if (resp.uid) {
                this.uid = resp.uid;
            }
        }
    });
}
}
