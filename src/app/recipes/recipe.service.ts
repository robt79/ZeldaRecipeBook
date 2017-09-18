import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Pumpkin Stew',
    'Raises defense and health.', 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-hd/0/02/Pumpkinsoup.jpg', [
      new Ingredient('Fortified Pumpkin', 1),
      new Ingredient('Hydromelon', 1),
      new Ingredient('Voltfruit', 1),
      new Ingredient('Freshmilk', 1)
    ]),
    new Recipe('Mushroom Omelet',
    'Raises health.', 'http://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-hd/0/0f/Mushroomomelet.jpg', [
      new Ingredient('Any mushroom', 1),
      new Ingredient('Bird Egg', 1),
      new Ingredient('Goat Butter', 1),
      new Ingredient('Rock Salt', 1)

    ])
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }

}
