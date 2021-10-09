import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FirestoreService } from './firestore.service';
import { Collection } from '../app.variable';
import { CharacterModel } from '../model/character.model';
import { Observable } from 'rxjs';

@Injectable()
export class CharacterService extends FirestoreService<CharacterModel> {
  constructor(protected firestore: AngularFirestore) {
    super(firestore, Collection.CHARACTER);
  }

  findByRank(rank: string): Observable<CharacterModel[]> {
    return this.findByField('rank', rank);
  }
}
