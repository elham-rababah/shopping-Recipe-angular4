import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipesRoutingModule } from './recipes.routing.modules';
import { ShaerdModule} from '../shaerd/shared.module';

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
		ShaerdModule
	],
	exports: []
})
export class RecipesModule{}