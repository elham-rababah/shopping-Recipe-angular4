import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shaerd/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {

	ingredients: Ingredient[] = [];
  ingrediantsChangeSub : Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    
    this.ingrediantsChangeSub = this.shoppingListService.ingrediantsChange.subscribe(
        (ingredients: Ingredient[]) =>{
          this.ingredients = ingredients;
        }
      )
  }

  ingredientClicked(index){
    this.shoppingListService.ingrediantClicked.emit(index);
  }

  ngOnDestroy() {
    this.ingrediantsChangeSub.unsubscribe;
  }
}
