import { Injectable } from '@angular/core';
import { Recipe } from './../recipe.model';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as RecipeActions from './recipes.actions';
import * as fromRecipes from './recipes.reducers';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipesEffects {
  constructor(private action$: Actions, private httpClient: HttpClient,
    private store: Store<fromRecipes.State>) {}

  @Effect()
  getRecipes = this.action$.ofType(RecipeActions.GET_RECIPE)
    .switchMap((action: RecipeActions.GetRecipes) => {
      return this.httpClient
        .get<Recipe[]>('https://shoppingandrecipe.firebaseio.com/recipes.json',
        );
    }).map(
      (res) => {
          return [new RecipeActions.SetRecipes(res)];
      },
      (error) => {
        error.throw(error);
      });

  @Effect({dispatch: false})
  setRecipes = this.action$.ofType(RecipeActions.PUT_RECIPES)
  .withLatestFrom(this.store.select('recipes'))
  .switchMap(([action, state]) => {
    return this.httpClient
      .put<Recipe[]>('https://shoppingandrecipe.firebaseio.com/recipes.json'
      , state['recipes'])
      .map(
        (res) => {
          console.log(res);
          return res;
        },
        (error) => {
          return error.throw(error);
        });
      });
}
