import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShikiService } from './shiki.service';
import { IngredientService } from './ingredient.service';
import { CharacterService } from './character.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ShikiService,
    IngredientService,
    CharacterService,
  ],
})
export class ServiceModule {
}
