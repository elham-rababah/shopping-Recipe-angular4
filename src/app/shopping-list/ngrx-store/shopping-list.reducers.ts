import { Ingredient } from '../../shaerd/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'; //bundel all export to one obj 

export interface State {
	ingredients: Ingredient[],
	editedIngredient : Ingredient,
	editedIngredientIndex: number;

}

const initState: State = {	
	ingredients: [
		new Ingredient('Apple',5),
		new Ingredient('Apple1',1),
		new Ingredient('Apple2',2)
	],
	editedIngredient : null,
	editedIngredientIndex: null
};

export function shoppingListReducer(state = initState , action: ShoppingListActions.ShoppingListActions){
	switch (action.type) {
		case ShoppingListActions.ADD_INGREDIEANT:
			return {
				...state,//copy all state properties
				ingredients:[...state.ingredients, action.payload] // action to return extra info 
			};

		case ShoppingListActions.UPDATE_INGREDIEANT:
			let ingredients = [...state.ingredients];
			ingredients[state.editedIngredientIndex] = action.payload.ingredient
			return {
				...state,
				ingredients: ingredients
			};

		case ShoppingListActions.DELETE_INGREDIEANT:
			let oldIngredients = [...state.ingredients]
			oldIngredients.splice(state.editedIngredientIndex,1);
			return {
				...state,
				ingredients: oldIngredients
			};
		case ShoppingListActions.EDIT_INGREDIEANT:
			state.editedIngredientIndex = action.payload;
			state.editedIngredient = state.ingredients[action.payload]
			return {
				...state,
				ingredients:[...state.ingredients]
			};
		default:
			return state;
	}
}