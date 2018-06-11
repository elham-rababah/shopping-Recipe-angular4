import { Recipe } from './recipe.model';
import { Ingredient } from '../shaerd/ingredient.model';
import { EventEmitter} from '@angular/core'

export class RecipeService {

	recipeChange = new EventEmitter<Recipe[]>();

	recipes: Recipe[] = [
		new Recipe (
			'Recipe name',
			'Tary Tasty',
			'https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/a1/c2/b6/a1c2b6e3-c5e5-b283-977b-9a0be775c0fa/mzl.mrmxmoym.jpg/643x0w.jpg',
			[
				new Ingredient('EEEEE',1),
				new Ingredient('EEEEE1',2)
			]
			),
		new Recipe (
			'Recipe name1',
			'Tary Tasty1',
			'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/1101-couscous-chicken-ck.jpg?itok=7geW7sC_',
			[
				new Ingredient('AAAAAA',1),
				new Ingredient('AAAAAA1',2)
			]
			)
	];


	getRecipe() {
		// To return copy about our array 
		return this.recipes.slice();
	}

	getRecipeByIndex(index) {
		return this.recipes.slice(index)[0];
	}


	addRecipe(Rec: Recipe) {
    	
    }

   

	editRecipe(Rec: Recipe) {

	}

	isRecipeExist(Rec: Recipe) {
	    /*for (let i = 0; i < this.recipes.length; i++) {
	        if (this.recipes[i].name === ing.name && this.recipes[i].amount === ing.amount ) {
	            return true;
	        }
	    }
	    return false;*/
	}

	deleteRecipe(index){
		this.recipes.splice(index,1);
		//console.log(this.recipes)
		this.recipeChange.emit(this.recipes)
	}


}