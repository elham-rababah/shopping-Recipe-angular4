import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = 'SET_RECIPES';
export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const GET_RECIPE = 'GET_RECIPE';
export const PUT_RECIPES = 'PUT_RECIPES';

export class SetRecipes implements Action {
  readonly type  = SET_RECIPES;
  constructor(public payload: Recipe[]) {
  }
}

export class GetRecipes implements Action {
  readonly type  = GET_RECIPE;
  constructor(public payload: number) {
  }
}

export class AddRecipe implements Action {
  readonly type  = ADD_RECIPE;
  constructor(public payload) {
  }
}

export class EditRecipe implements Action {
  readonly type  = EDIT_RECIPE;
  constructor(public payload: {index: number, updatedRecipe: Recipe}) {
  }
}
export class DeleteRecipe implements Action {
  readonly type  = DELETE_RECIPE;
  constructor(public payload: number) {
  }
}

export class PutRecipes implements Action {
  readonly type  = PUT_RECIPES;
  constructor() {
  }
}

export type RecipeActions = SetRecipes | AddRecipe | EditRecipe | DeleteRecipe | GetRecipes | PutRecipes ;
