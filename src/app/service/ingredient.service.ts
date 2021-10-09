import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FirestoreService } from './firestore.service';
import { Collection } from '../app.variable';
import { IngredientModel } from '../model/ingredient.model';

@Injectable()
export class IngredientService extends FirestoreService<IngredientModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore, Collection.INGREDIENT);
  }
}
