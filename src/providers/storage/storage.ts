import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Exercises } from '../../Exercises';
import { map } from 'rxjs/operators';

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
    this.exerciseCollection = this.db.collection('exercise', ref => ref.where('UserID', '==', userID)
      .where('Complete', '==', false));
      
    this.exercises = this.exerciseCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Exercises;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

    return this.exercises;
  }
}
