import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Exercises } from '../../Exercises';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  private exerciseCollection: AngularFirestoreCollection<Exercises>;
  exercises: Observable<Exercises[]>;

  constructor(private db: AngularFirestore) {
    console.log('Hello StorageProvider Provider');
  }

  getExercises(userID: string) {    
    this.exerciseCollection = this.db.collection('exercise', ref => ref.where('UserID', '==', userID));
    this.exercises = this.exerciseCollection.valueChanges();
    return this.exercises;
  }
}
