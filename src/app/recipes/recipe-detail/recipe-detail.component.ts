import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import * as ShoppingListActions from '../../shopping-list/ngrx-store/shopping-list.actions';
import * as fromRecipe from '../ngrx-store/recipes.reducers';
import * as RecipeActions from '../ngrx-store/recipes.actions';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  recipeId: number;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private store: Store<fromRecipe.RecipeState>,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeId = params['id'];
      this.store.select('recipes').subscribe((recipes) => {
        this.recipe = recipes.recipes[this.recipeId];
      });
    });
  }

  addToShopping() {
    this.recipe.ingredients
      .map((ingredient) => {
        this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
      });
  }

  deleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.recipeId));
    this.router.navigate(['/recipes'], { relativeTo: this.route });

  }

}
