import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shaerd/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[] = [
		new Ingredient('Apple',5),
		new Ingredient('Apple1',1),
		new Ingredient('Apple2',2),
	];

  constructor() { }

  ngOnInit() {
  }

  ingrediantAdded(ing: Ingredient) {
    this.ingredients.push(ing)
  }
}
