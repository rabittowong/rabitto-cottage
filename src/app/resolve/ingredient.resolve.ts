import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { IngredientModel } from '../model/ingredient.model';
import { IngredientService } from '../service/ingredient.service';

@Injectable()
export class ResolveIngredientAll implements Resolve<IngredientModel[]> {
  constructor(private ingredientService: IngredientService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IngredientModel[]> {
    return this.ingredientService.findAll();
  }
}
