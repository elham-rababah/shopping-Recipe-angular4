import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as fromRecipe from '../ngrx-store/recipes.reducers';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesState: Observable<fromRecipe.State>;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRecipe.RecipeState>
  ) { }

  ngOnInit() {
    this.recipesState = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['./new'], { relativeTo: this.route });
  }
}
