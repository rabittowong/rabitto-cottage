import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResolveShikiAll } from './shiki.resolve';
import { ResolveIngredientAll } from './ingredient.resolve';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ResolveShikiAll,
    ResolveIngredientAll,
  ],
})
export class ResolveModule {
}
