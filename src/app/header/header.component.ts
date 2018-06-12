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
	
	onSaveData() {
		this.recipeService.saveRecipeData()
		.subscribe((recipes)=>{
		},(err)=>{
			alert("error happend you should handel it");
		});

		this.shoppingListService.saveIngredientsData()
		.subscribe((ingredients)=>{
		},(err)=>{
			alert("error happend you should handel it");
		})
	}

	onFetchData() {
		this.recipeService.getRecipeData().subscribe((recipes)=>{
			this.recipeService.recipes = recipes;
			this.recipeService.recipeChange.emit(recipes);
		})
	}
}