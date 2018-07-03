import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shaerd/ingredient.model';
import * as FromApp from '../ngrx-store/app.redusers';


@Injectable()

export class ShoppingListService {
	ingredients = [];
	constructor(
		private httpClient: HttpClient, 
		private store: Store<FromApp.AppState>
		){
			this.store.select('shoppingList').subscribe((data)=>{
				this.ingredients = data.ingredients;
			})
		}
	

	saveIngredientsData() {
		return this.httpClient
		.put('https://shoppingandrecipe.firebaseio.com/ingredients.json',this.ingredients)
		.map(
			(res)=>{
				
				return res;
			},
			(error)=>{
				return error.throw(error);
			})
	}
}