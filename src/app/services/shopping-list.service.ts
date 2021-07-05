import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientsChangedEmitter = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Ground Turkey', 2),
    new Ingredient('Mash Potatoes', 3)
  ]


  getIngredients() {
    return [...this.ingredients]
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChangedEmitter.emit([...this.ingredients])
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChangedEmitter.emit([...this.ingredients])
  }

}
