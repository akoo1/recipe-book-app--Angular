import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "../shared/recipe.model";
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelectedEmitter = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Meat Loaf',
      'This is a bomb meat loaf~', 
      './assets/meat-loaf.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Parsley', 2)
      ]
    ),
    new Recipe(
      'Fish and Chips',
      'The best fish and chips in the world', 
      './assets/fish-and-chips.png',
      [
        new Ingredient('Fish', 2),
        new Ingredient('Fries', 2),
        new Ingredient('Ketchup', 1),
        new Ingredient('TarTar', 1),
      ]
    )
  ]


  // We inject the ShoppingListService in here, so we can pass ingredients to the shoppingList component
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // Arrays are reference type, simply return recipes will modify the original recipes,
    // thus we make a deep copy.
    return [...this.recipes]
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }



}