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
			console.log("ADD_INGREDIEANT", action.payload);
			return {
				...state,// I think the currnt state
				ingredients:[...state.ingredients, action.payload] // action to return extra info 
			};

		case ShoppingListActions.DELETE_INGREDIEANT:
			console.log("DELETE_INGREDIEANT", action.payload);
			let oldIngredients = [...state.ingredients]
			oldIngredients.splice(action.payload,1);
			console.log(oldIngredients);
			return {
				...state,
				ingredients: oldIngredients
			};
		default:
			console.log('default:case');
			return state;
	}
}