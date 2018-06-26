import { Action } from '@ngrx/store';
import { Ingredient } from '../../shaerd/ingredient.model';

export const ADD_INGREDIEANT = 'ADD_INGREDIEANT';
export const UPDATE_INGREDIEANT = 'UPDATE_INGREDIEANT';
export const DELETE_INGREDIEANT = 'DELETE_INGREDIEANT';
export const EDIT_INGREDIEANT = 'EDIT_INGREDIEANT';

export class AddIngredient implements Action {
	readonly type = ADD_INGREDIEANT;
	// information that send data from your application to your store
	constructor(public payload: Ingredient) {}
}

export class UpdateIngredient implements Action {
	readonly type = UPDATE_INGREDIEANT;
	// information that send data from your application to your store
	constructor(public payload: {ingredient: Ingredient}) {}
}

export class DeleteIngredient implements Action {
	readonly type = DELETE_INGREDIEANT;
	// information that send data from your application to your store
	constructor() {}
}

export class EditIngredient implements Action {
	readonly type = EDIT_INGREDIEANT;
	// information that send data from your application to your store
	constructor(public payload: number) {}
}


export type ShoppingListActions = AddIngredient | UpdateIngredient | DeleteIngredient | EditIngredient;