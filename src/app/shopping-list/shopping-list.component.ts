import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from '../shaerd/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {

	ingredients: Observable<{ingredients: Ingredient[] }>;
  ingrediantsChangeSub : Subscription;
  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{shoppingList: {ingredients: Ingredient[] }}>,
    ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  ingredientClicked(index){
    this.shoppingListService.ingrediantClicked.emit(index);
  }

  ngOnDestroy() {
    this.ingrediantsChangeSub.unsubscribe;
  }
}
