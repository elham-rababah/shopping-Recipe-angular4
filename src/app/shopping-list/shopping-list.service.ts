import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shaerd/ingredient.model';
import { AuthService } from '../auth/auth.service';
import * as FromShoppingList from './ngrx-store/shopping-list.reducers';


@Injectable()

export class ShoppingListService {
	ingredients = [];
	constructor(
		private httpClient: HttpClient, 
		private authService: AuthService,
		private store: Store<FromShoppingList.AppState>
		){
			this.store.select('shoppingList').subscribe((data)=>{
				this.ingredients = data.ingredients;
			})
		}
	

	saveIngredientsData() {
		let tokenId = this.authService.getIdToken();
		return this.httpClient
		.put('https://shoppingandrecipe.firebaseio.com/ingredients.json',this.ingredients,
			{params: new HttpParams().set('auth',tokenId)})
		.map(
			(res)=>{
				
				return res;
			},
			(error)=>{
				return error.throw(error);
			})
	}
}