import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipeService } from '../../recipes/recipe.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import * as fromAuth from '../../auth/ngrx-store/auth.reducers';
import * as formApp from '../../ngrx-store/app.redusers';
import * as AuthActions from '../../auth/ngrx-store/auth.actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
	
	authState: Observable<fromAuth.State>;

	constructor(
		private recipeService: RecipeService,
		private shoppingListService : ShoppingListService,
		private store: Store<formApp.AppState>
		) {}

	ngOnInit() {
		this.authState = this.store.select('auth');
		console.log();
	}
	
	onSaveData() {
		this.recipeService.saveRecipeData()
		.subscribe((recipes)=>{
		},(err)=>{
			console.log("error happend you should handel it",err);
			
		});

		this.shoppingListService.saveIngredientsData()
		.subscribe((ingredients)=>{
		},(err)=>{
			console.log("error happend you should handel it",err);
		})
	}

	onFetchData() {
		this.recipeService.getRecipeData()
		.subscribe((recipes)=>{
			this.recipeService.recipes = recipes;
			this.recipeService.recipeChange.emit(recipes);
		},(err)=>{
			console.log("error happend you should handel it",err);
		})
	}

	Logout() {
		this.store.dispatch(new AuthActions.LogoutUser());
	}
}