import { Action } from '@ngrx/store';
import { Ingredient } from '../../shaerd/ingredient.model';

export const ADD_INGREDIEANT = 'ADD_INGREDIEANT';
export const DELETE_INGREDIEANT = 'DELETE_INGREDIEANT';

export class AddIngredient implements Action {
	readonly type = ADD_INGREDIEANT;
	// information that send data from your application to your store
	
	constructor(public payload: Ingredient) {}

}

export class DeleteIngredient implements Action {
	readonly type = DELETE_INGREDIEANT;
	// information that send data from your application to your store
	
	constructor(public payload: number) {}

}

export type ShoppingListActions = AddIngredient | DeleteIngredient;