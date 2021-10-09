import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'underscore';

export abstract class FirestoreService<T> {
  protected constructor(protected firestore: AngularFirestore, protected collection: string) {
  }

  generateId(): string {
    return this.firestore.collection<T>(this.collection).doc().ref.id;
  }

  getById(id: string): Observable<T> {
    const snapshot = this.firestore.collection<T>(this.collection).doc(id).get()
    return snapshot.pipe(map(doc => {
      return this.parse({ id: doc.id, ...doc.data() });
    }));
  }

  findAll(): Observable<T[]> {
    const snapshot = this.firestore.collection<T>(this.collection).get();
    return snapshot.pipe(map(c => c.docs.map(doc => {
      return this.parse({ id: doc.id, ...doc.data() });
    })));
  }

  findByField(field: string, value: any): Observable<T[]> {
    const snapshot = this.firestore.collection<T>(this.collection, ref => ref.where(field, '==', value)).get();
    return snapshot.pipe(map(c => c.docs.map(doc => {
      return this.parse({ id: doc.id, ...doc.data() });
    })));
  }

  create(item: T): Observable<void> {
    const id = this.firestore.collection<T>(this.collection).doc().ref.id;
    return this.createById(id, item);
  }

  createById(id: string, item: T): Observable<void> {
    (item as any).createdDate = new Date();
    (item as any).updatedDate = new Date();
    return from(this.firestore.collection<T>(this.collection).doc(id).set(_.omit(item, 'id') as any));
  }

  update(item: T): Observable<void> {
    const id = (item as any).id;
    return this.updateById(id, item);
  }

  updateById(id: string, item: T): Observable<void> {
    (item as any).updatedDate = new Date();
    return from(this.firestore.collection<T>(this.collection).doc(id).set(_.omit(item, 'id') as any));
  }

  delete(item: T): Observable<void> {
    const id = (item as any).id;
    return this.deleteById(id);
  }

  deleteById(id: string): Observable<void> {
    return from(this.firestore.collection<T>(this.collection).doc(id).delete());
  }

  private parse(item: any): T {
    for (const key in item) {
      if (typeof (item[key] as any)?.toDate === "function") {
        item[key] = (item[key] as any).toDate();
      }
    }
    return item;
  }
}
