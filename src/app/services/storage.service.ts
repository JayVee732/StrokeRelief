import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { environment } from '../../environments/environment';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private firebaseURL: string = environment.firebase.databaseURL;
  private uid: string = '';
  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private http: HttpClient, private afa: AngularFireAuth, private db: AngularFirestore) {
    this.getUID();
  }

  //Post new user to the database
  sendPostRequestNewUser(firstName, surname, addressLine1, AddressLine2, county, uid, email, phoneNumber) {
    this.db.collection('users').add({      
      "FirstName": firstName,
      "Surname": surname,
      "AddressLine1": addressLine1,
      "AddressLine2": AddressLine2,
      "County": county,
      "PhoneNumber": phoneNumber,
      "UserID": uid,
      "Email": email,
      "UserRole": "Client"
    });
  }

  // Get user information
  getListOfUsers() {
    this.userCollection = this.db.collection('users');
    this.users = this.userCollection.valueChanges();
    return this.users;
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
