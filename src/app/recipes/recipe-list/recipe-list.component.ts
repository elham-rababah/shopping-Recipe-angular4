import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeItemClicked = new EventEmitter<Recipe>();
  recipes: Recipe[] =[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

}
