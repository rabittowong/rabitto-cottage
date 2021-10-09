import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IngredientModel } from '../model/ingredient.model';
import { dialogData } from '../data/dialog.data';

@Component({
  templateUrl: './ingredient-content.component.html',
  styleUrls: ['./ingredient-content.component.scss'],
})
export class IngredientContentComponent implements OnInit, AfterViewInit {
  ingredients!: IngredientModel[];
  dialogs: string[] = dialogData;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  getRandomItemInArray<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  ngAfterViewInit(): void {
    alert(this.getRandomItemInArray(this.dialogs));
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const ingredientData = (this.activatedRoute.snapshot.data['ingredients'] as IngredientModel[]) || [];
    this.ingredients = ingredientData.sort((a, b) => a.order - b.order);
  }
}
