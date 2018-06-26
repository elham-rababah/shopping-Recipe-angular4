import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ingredient } from '../shaerd/ingredient.model';
import { AuthService } from '../auth/auth.service';


@Injectable()

export class ShoppingListService {

	constructor(private httpClient: HttpClient, private authService: AuthService){}
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