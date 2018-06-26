import { Ingredient } from '../../shaerd/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'; //bundel all export to one obj 

const initState = {	
	ingredients: [
		new Ingredient('Apple',5),
		new Ingredient('Apple1',1),
		new Ingredient('Apple2',2)
	]
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
			ingredients[action.payload.index] = action.payload.ingredient
			return {
				...state,
				ingredients: ingredients
			};

		case ShoppingListActions.DELETE_INGREDIEANT:
			let oldIngredients = [...state.ingredients]
			oldIngredients.splice(action.payload,1);
			return {
				...state,
				ingredients: oldIngredients
			};
		default:
			return state;
	}
}