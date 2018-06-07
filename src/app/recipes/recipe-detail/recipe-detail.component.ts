import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Recipe } from '../recipe.model'
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  recipeId: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.recipeId = params['id'];
      this.recipe = this.recipeService.getRecipeByIndex(this.recipeId);
    })
  }

  addToShopping(){
  	this.recipe.ingredients
  	.map((ingredient)=>{
  		this.shoppingListService.addIngrediant(ingredient);
  	})
  }


}
