import { Component, OnInit } from '@angular/core';

import { CharacterModel } from '../model/character.model';
import { characterSampleData } from '../data/character.data';
import { rankSampleData } from '../data/rank.data';

@Component({
  templateUrl: './shiki-garden-character.component.html',
  styleUrls: ['./shiki-garden-character.component.scss'],
})
export class ShikiGardenCharacterComponent implements OnInit {
  ranks: string[] = rankSampleData;
  characters: CharacterModel[] = [];

  constructor() {
  }

  onSelectRank(rank: string): void {
    this.characters = characterSampleData.filter(c => c.rank == rank);
  }

  ngOnInit(): void {
    this.onSelectRank(this.ranks[0]);
  }
}
