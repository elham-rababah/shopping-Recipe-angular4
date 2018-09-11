import { Recipe } from './../recipe.model';
import { Ingredient } from './../../shaerd/ingredient.model';
import * as RecipeActions from './recipes.actions';


export interface State  {
  Recipes: Recipe [];
}

export interface RecipeState {
  Recipes: State;
}

const initialState: State = {
  Recipes: [
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
        ...state,
        Recipes: [...state.Recipes, action.payload]
      };
    }
    case RecipeActions.ADD_RECIPE: {
      return {
        Recipes: [...state.Recipes, action.payload]
      };
    }
    case RecipeActions.EDIT_RECIPE: {
      const recipes = [...state.Recipes];
      recipes[action.payload.index] = action.payload.updatedRecipe;
      return {
        Recipes: recipes
      };
    }
    case RecipeActions.DELETE_RECIPE: {
      const oldRecipes = [...state.Recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        Recipes : oldRecipes
      };
    }
    default: {
      return state;
    }
  }
}
