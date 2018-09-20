import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { RecipeService } from "../../recipes/recipe.service";
import { Observable } from "rxjs/Observable";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import * as fromAuth from "../../auth/ngrx-store/auth.reducers";
import * as AuthActions from "../../auth/ngrx-store/auth.actions";
import * as fromRecipe from "../../recipes/ngrx-store/recipes.reducers";
import * as RecipeActions from "../../recipes/ngrx-store/recipes.actions";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private store: Store<fromRecipe.RecipeState>
  ) {}

  ngOnInit() {
    this.authState = this.store.select("auth");
    console.log();
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.PutRecipes());
    this.shoppingListService.saveIngredientsData().subscribe(
      ingredients => {},
      err => {
        console.log("error happend you should handel it", err);
      }
    );
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.GetRecipes(1));
  }

  Logout() {
    this.store.dispatch(new AuthActions.LOGOUTUSER());
  }
}
