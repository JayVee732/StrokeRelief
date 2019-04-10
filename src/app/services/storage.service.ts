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

  exerciseCollection: AngularFirestoreCollection;
  exercise: any;

  constructor(private afa: AngularFireAuth, private db: AngularFirestore) { }

  //Post new user to the database
  sendPostRequestNewUser(firstName, surname, addressLine1, AddressLine2, county, uid, email, phoneNumber) {
    this.db.collection('users').doc(uid).set({
      "FirstName": firstName,
      "Surname": surname,
      "AddressLine1": addressLine1,
      "AddressLine2": AddressLine2,
      "County": county,
      "PhoneNumber": phoneNumber,
      "Email": email,
      "UserID": uid,
      "UserRole": "Client"
    });
  }

  // Get user information
  getListOfUsers(userRole: string) {
    this.userCollection = this.db.collection('users', ref => ref.where('UserRole', '==', userRole));
    this.users = this.userCollection.valueChanges();
    return this.users;
  }

  getUser(uid: string) {
    this.user = this.db.doc('users/' + uid).valueChanges();
    return this.user;
  }

  getUserExercise(userID: string) {
    this.userExerciseCollection = this.db.collection('exercise', ref => ref.where('UserID', '==', userID));
    this.userExercise = this.userExerciseCollection.valueChanges();
    return this.userExercise;
  }
  
  getUserExerciseLast7Days(userID: string) {
    this.userExerciseCollection = this.db.collection('exercise', ref => 
    ref.where('UserID', '==', userID)
        .where('Date', '>=', Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
        .where('Date', '<=', Date.now()));
    this.userExercise = this.userExerciseCollection.valueChanges();
    return this.userExercise;
  }

  postNewExercise(exerciseName: string, time: number, numOfReps: number, userID: string) {
    const id = this.db.createId();
    this.db.collection('exercise').doc(id).set({
      "ExerciseName": exerciseName,
      "Complete": false,
      "NumOfReps": numOfReps,
      "UserID": userID,
      "Date": Date.now(),
      "ID": id
    })
  }

  getExerciseInfo(id: string) {
    this.exercise = this.db.doc('exercise/' + id).valueChanges(); // Change the values to id
    return this.exercise;
  }

}
