import { Action } from '@ngrx/store';
import { Ingredient } from '../../shaerd/ingredient.model';

export const ADD_INGREDIEANT = 'ADD_INGREDIEANT';

export class AddIngredient implements Action {
	readonly type = ADD_INGREDIEANT;
	// information that send data from your application to your store
	//payload:Ingredient;

	constructor(public payload: Ingredient) {
		// code...
	}

}

export type ShoppingListActions = AddIngredient;