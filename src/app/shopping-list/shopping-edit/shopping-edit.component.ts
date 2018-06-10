import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import { Ingredient } from '../../shaerd/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editMode = false;
  editItemIndex: number;
  item = {
    name: '',
    amount:0
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingrediantClicked.subscribe((index: number)=>{

        let ingredient = this.shoppingListService.getIngrediantByIndex(index);
        this.item.name = ingredient.name
        this.item.amount = ingredient.amount
        this.editMode = true;
        this.editItemIndex = index;
    })
  }

  onAddItem(form : NgForm){
  	let ingname = this.item.name;
  	let ingamount = this.item.amount;
    let newIngrediant = new Ingredient(ingname,ingamount);
    if(this.editMode){
      this.shoppingListService.editIngrediant(this.editItemIndex,newIngrediant); 
      this.editMode = false;
    } else {
      this.shoppingListService.addIngrediant(newIngrediant);     
    }
  }

}
