import { Component, OnInit } from '@angular/core';

import { CharacterModel } from '../model/character.model';
import { rankData } from '../data/rank.data';
import { CharacterService } from '../service/character.service';

@Component({
  templateUrl: './shiki-garden-character.component.html',
  styleUrls: ['./shiki-garden-character.component.scss'],
})
export class ShikiGardenCharacterComponent implements OnInit {
  ranks: string[] = rankData;
  characters: CharacterModel[] = [];

  constructor(private characterService: CharacterService) {
  }

  onSelectRank(rank: string): void {
    this.characterService.findByRank(rank).subscribe(res => {
      this.characters = res.sort((a, b) => a.order - b.order);
    });
  }

  ngOnInit(): void {
    this.onSelectRank(this.ranks[0]);
  }
}
