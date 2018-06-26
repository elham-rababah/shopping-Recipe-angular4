import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shaerd/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import * as ShoppingListActions from '../ngrx-store/shopping-list.actions'; 
import * as FromShoppingList from '../ngrx-store/shopping-list.reducers'; 


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
    private store: Store<FromShoppingList.AppState>,
    ) { }

  ngOnInit() {
    this.store.select('shoppingList').subscribe((data)=>{
      if(data.editedIngredientIndex != null) {
        this.item.name = data.editedIngredient.name;
        this.item.amount = data.editedIngredient.amount;
        this.editMode = true;

      }
    })
    /*this.shoppingListService.ingrediantClicked.subscribe((index: number)=>{

        let ingredient = this.shoppingListService.getIngrediantByIndex(index);
        this.item.name = ingredient.name
        this.item.amount = ingredient.amount
        this.editMode = true;
        this.editItemIndex = index;
    })*/
  }

  onSubmit(form : NgForm){
  	let ingname = this.item.name;
  	let ingamount = this.item.amount;
    let newIngrediant = new Ingredient(ingname,ingamount);
    if(this.shoppingListService.isIngrediantExist(newIngrediant)) {
        alert("exist");
    } else {
      if(this.editMode){
        this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient:newIngrediant}));
        this.editMode = false;
      } else {
        this.store.dispatch(new ShoppingListActions.AddIngredient(newIngrediant));
      }

      this.item = {
        name: '',
        amount:0
      }

    }
  }

  onClear(){
    this.item = {
      name: '',
      amount:0
    }
    this.editMode = false;
  }

  onDelete(){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
  }

}
