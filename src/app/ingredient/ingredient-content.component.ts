import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { IngredientModel } from '../model/ingredient.model';
import { ingredientSampleData } from '../data/ingredient.data';
import { dialogSampleDate } from '../data/dialog.data';

@Component({
  templateUrl: './ingredient-content.component.html',
  styleUrls: ['./ingredient-content.component.scss'],
})
export class IngredientContentComponent implements AfterViewInit {
  ingredients: IngredientModel[] = ingredientSampleData;
  dialogs: string[] = dialogSampleDate;

  constructor(private router: Router) {
  }

  getRandomItemInArray<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  ngAfterViewInit(): void {
    alert(this.getRandomItemInArray(this.dialogs));
    this.router.navigate(['/']);
  }
}
