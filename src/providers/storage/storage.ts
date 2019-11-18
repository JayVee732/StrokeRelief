import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Exercises } from '../../Exercises';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable()
export class StorageProvider {

  private exerciseCollection: AngularFirestoreCollection<Exercises>;
  exercises: Observable<Exercises[]>;
  date: number;
  dateFormat: string;

  constructor(private db: AngularFirestore, private datePipe: DatePipe) {
    this.date = Date.now();
    this.dateFormat = this.datePipe.transform(this.date, 'dd/MM/yyyy');
  }

  getExercises(userID: string) {
    this.exerciseCollection = this.db.collection('exercise', ref => ref.where('UserID', '==', userID)
      .where('Complete', '==', false)
      /*.where('Date','==' , this.dateFormat)*/);

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
