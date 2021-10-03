import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { IngredientContentComponent } from './ingredient-content.component';
import { routes } from './ingredient.routes';

@NgModule({
  declarations: [
    IngredientContentComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
})
export class IngredientModule {
}
