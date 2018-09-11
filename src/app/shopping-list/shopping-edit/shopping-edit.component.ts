import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shaerd/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../ngrx-store/shopping-list.actions';
import * as FromApp from '../../ngrx-store/app.redusers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editMode = false;
  item = {
    name: '',
    amount:0
  }

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<FromApp.AppState>,
    ) { }

  ngOnInit() {
    this.store.select('shoppingList').subscribe((data)=>{
      if(data.editedIngredientIndex != null) {
        this.item.name = data.editedIngredient.name;
        this.item.amount = data.editedIngredient.amount;
        this.editMode = true;

      }
    })
  }

  onSubmit(form : NgForm){
    let ingname = this.item.name;
    let ingamount = this.item.amount;
    let newIngrediant = new Ingredient(ingname, ingamount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: newIngrediant }));
      this.editMode = false;
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngrediant));
    }
    this.onClear();
  }

  onClear() {
    this.item = {
      name: '',
      amount: 0
    }
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
  }

}
