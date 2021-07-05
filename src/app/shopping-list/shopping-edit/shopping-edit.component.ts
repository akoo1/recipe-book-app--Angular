import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  name: string;
  amount: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }


  onAddIngredients() {
    let newIngredient = new Ingredient(this.name, this.amount)
    this.shoppingListService.addIngredient(newIngredient)
  }

}
