import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShaerdModule } from '../shaerd/shared.module';
import { RecipesEffects } from './ngrx-store/recipes.effects';
import { recipesReducers } from './ngrx-store/recipes.reducers';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes.routing.module';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipesStartComponent,
  ],
  imports: [
    ReactiveFormsModule,
    RecipesRoutingModule,
    CommonModule,
    ShaerdModule,
    StoreModule.forFeature('recipes', recipesReducers),
    EffectsModule.forFeature([RecipesEffects])
  ],
  exports: []
})
export class RecipesModule { }
