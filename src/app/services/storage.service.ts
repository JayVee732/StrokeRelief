import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public uid: string = '';
  loggedInUser: any;
  dateToday: number;

  private userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user: any;

  userExerciseCollection: AngularFirestoreCollection;
  userExercise: any;

  constructor(private afa: AngularFireAuth, private db: AngularFirestore) { }

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
    this.userCollection = this.db.collection('users', ref => ref.where('UserRole', '==', 'Client'));
    this.users = this.userCollection.valueChanges();
    return this.users;
  }

  getUser(id: string) {
    this.user = this.db.collection('users', ref => ref.where('UserID', '==', id).limit(1)).valueChanges();
    console.log(this.user);
    return this.user;
  }

  getUserExercise(userID: string) {
    this.userExerciseCollection = this.db.collection('exercise', ref => ref.where('UserID', '==', userID));
    this.userExercise = this.userExerciseCollection.valueChanges();
    return this.userExercise;
  }

  postNewExercise(exerciseName: string, time: number, userID: string) {
    this.db.collection('exercise').add({
      "ExerciseName": exerciseName,
      "Complete": false,
      "Time": time,
      "UserID": userID,
      "Date": Date.now()
    })
  }
}
