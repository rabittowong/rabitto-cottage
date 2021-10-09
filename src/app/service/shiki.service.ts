import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FirestoreService } from './firestore.service';
import { Collection } from '../app.variable';
import { ShikiModel } from '../model/shiki.model';

@Injectable()
export class ShikiService extends FirestoreService<ShikiModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore, Collection.SHIKI);
  }
}
