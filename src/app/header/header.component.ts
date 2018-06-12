import { Component} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent {
	
	constructor(
		private recipeService: RecipeService,
		private shoppingListService : ShoppingListService
		) {}
	
	saveData() {
		this.recipeService.saveRecipeData()
		.subscribe((recipes)=>{
			console.log(recipes);
		},(err)=>{
			alert("error happend you should handel it")
		});

		this.shoppingListService.saveIngredientsData()
		.subscribe((ingredients)=>{
			console.log(ingredients);
		},(err)=>{
			alert("error happend you should handel it")
		})
	}
}