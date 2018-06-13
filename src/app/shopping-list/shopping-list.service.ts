import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { Http, Response } from '@angular/http';
import { Ingredient } from '../shaerd/ingredient.model';
import { AuthService } from '../auth/auth.service';


@Injectable()

export class ShoppingListService {

	constructor(private http: Http, private authService: AuthService){}

	ingrediantsChange = new Subject<Ingredient[]>();
	ingrediantClicked = new EventEmitter<number>();

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

    getIngrediantByIndex(index) {
		return this.ingredients.slice(index)[0];
	}

	editIngrediant(index, ing: Ingredient) {
		this.ingredients[index].name = ing.name;
		this.ingredients[index].amount = ing.amount;
		//this.ingrediantsChange.next(this.ingredients); ??? whay have no effect now
	}

	isIngrediantExist(ing: Ingredient) {
	    for (let i = 0; i < this.ingredients.length; i++) {
	        if (this.ingredients[i].name === ing.name && this.ingredients[i].amount === ing.amount ) {
	            return true;
	        }
	    }
	    return false;
	}


	deleteIngrediant(index){
		this.ingredients.splice(index,1);
		this.ingrediantsChange.next(this.ingredients)
	}


	saveIngredientsData() {
		let tokenId = this.authService.getIdToken();
		return this.http.put('https://shoppingandrecipe.firebaseio.com/ingredients.json?auth='+tokenId,this.ingredients)
		.map(
			(res: Response)=>{
				console.log(res.json())
				return res.json();
			},
			(error)=>{
				return error.throw(error);
			})
	}
}