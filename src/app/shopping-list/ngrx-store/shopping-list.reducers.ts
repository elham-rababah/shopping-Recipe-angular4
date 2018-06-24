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
	console.log('ShoppingListActions',ShoppingListActions);
	switch (action.type) {
		case ShoppingListActions.ADD_INGREDIEANT:
			console.log("ADD_INGREDIEANT");
			console.log("action.payload", action.payload);

			return {
				...state,// I think the currnt state
				ingredients:[...state.ingredients, action.payload] // action to return extra info 
			};
		
		default:
			console.log('default:case');
			return state;
	}
}