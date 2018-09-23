import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shaerd/ingredient.model';
import * as RecipeActions from './recipes.actions';
import * as FromApp from '../../ngrx-store/app.redusers';


export interface State  {
  recipes: Recipe [];
}

export interface RecipeState extends FromApp.AppState {
  recipes: State;
}

const initialState: State = {
  recipes: [
   new Recipe(
     'Recipe name',
     'Tary Tasty',
     'https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/a1/c2/b6/a1c2b6e3-c5e5-b283-977b-9a0be775c0fa/mzl.mrmxmoym.jpg/643x0w.jpg',
     [
       new Ingredient('EEEEE', 1),
       new Ingredient('EEEEE1', 2)
     ]
   ),
   new Recipe(
     'Recipe name1',
     'Tary Tasty1',
     // tslint:disable-next-line:max-line-length
     'http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/1101-couscous-chicken-ck.jpg?itok=7geW7sC_',
     [
       new Ingredient('AAAAAA', 1),
       new Ingredient('AAAAAA1', 2)
     ]
   )
 ]
};

export function recipesReducers(state = initialState, action: RecipeActions.RecipeActions) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES: {
      return {
        recipes : [...action.payload]
      };
    }
    case RecipeActions.ADD_RECIPE: {
      return {
        recipes: [...state.recipes, action.payload]
      };
    }
    case RecipeActions.EDIT_RECIPE: {
      const recipes = [...state.recipes];
      recipes[action.payload.index] = action.payload.updatedRecipe;
      return {
        recipes: recipes
      };
    }
    case RecipeActions.DELETE_RECIPE: {
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        recipes : oldRecipes
      };
    }
    case RecipeActions.GET_RECIPE: {
      return {
        recipes : state.recipes
      };
    }
    default: {
      return state;
    }
  }
}
