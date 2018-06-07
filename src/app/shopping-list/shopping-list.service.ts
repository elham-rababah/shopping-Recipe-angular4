import { Ingredient } from '../shaerd/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject'

export class ShoppingListService {

	ingrediantsChange = new Subject<Ingredient[]>();

	ingredients: Ingredient[] = [
		new Ingredient('Apple',5),
		new Ingredient('Apple1',1),
		new Ingredient('Apple2',2),
	];

	getIngredient(){
		return this.ingredients.slice();
	}

	addIngrediant(ing: Ingredient) {
    	this.ingredients.push(ing);
		this.ingrediantsChange.next(this.ingredients)
    }

}