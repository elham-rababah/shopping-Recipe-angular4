import { EventEmitter, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import  'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shaerd/ingredient.model';
import * as fromAuth from '../auth/ngrx-store/auth.reducers';
import * as formApp from '../ngrx-store/app.redusers';

@Injectable()

export class RecipeService {

  constructor(private httpClient: HttpClient, private store: Store<fromAuth.State>) { }

  recipeChange = new EventEmitter<Recipe[]>();

  recipes: Recipe[] = [
  ];


  getRecipe() {
    // To return copy about our array
    return this.recipes.slice();
  }

  getRecipeByIndex(index) {
    return this.recipes.slice(index)[0];
  }

  saveRecipeData() {
    return this.httpClient
      .put<Recipe[]>('https://shoppingandrecipe.firebaseio.com/recipes.json', this.recipes)
      .map(
        (res) => {
          return res;
        },
        (error) => {
          return error.throw(error);
        })
  }

  getRecipeData() {
    return this.httpClient
      .get<Recipe[]>('https://shoppingandrecipe.firebaseio.com/recipes.json',
      )
      .map(
        (res) => {
          return res;
        },
        (error) => {
          return error.throw(error);
        });
	}




}
