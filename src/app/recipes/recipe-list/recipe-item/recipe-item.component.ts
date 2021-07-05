import { Component, OnInit, Input} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }


  onSelectRecipe() {
    this.recipeService.recipeSelectedEmitter.emit(this.recipeItem);
  }

}
