import { Routes } from '@angular/router';

import { IngredientContentComponent } from './ingredient-content.component';
import { ResolveIngredientAll } from '../resolve/ingredient.resolve';

export const routes: Routes = [
  { path: '', component: IngredientContentComponent, resolve: { ingredients: ResolveIngredientAll } },
];
