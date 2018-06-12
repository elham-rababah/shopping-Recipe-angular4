import { EventEmitter, Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import  'rxjs/Rx';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shaerd/ingredient.model';

@Injectable()

export class RecipeService {

	constructor(private http: Http){}

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


	addRecipe(res: Recipe) {
    	this.recipes.push(res);
    	this.recipeChange.emit(this.recipes)
    }

	editRecipe(index,res: Recipe) {
		this.recipes.splice(index,1,res);
		this.recipeChange.emit(this.recipes);
	}

	deleteRecipe(index){
		this.recipes.splice(index,1);
		this.recipeChange.emit(this.recipes);
	}


	saveRecipeData() {
		return this.http.put('https://shoppingandrecipe.firebaseio.com/recipes.json',this.recipes)
		.map(
			(res: Response)=>{
				console.log(res.json())
				return res.json();
			},
			(error)=>{
				return error.throw(error);
			})
	}


}