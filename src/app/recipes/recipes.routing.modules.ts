import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';


const appRoutes : Routes = [
	{path: '', component:RecipesComponent, children:[
		{path:'', component:RecipesStartComponent},
		{path:'new', component:RecipeEditComponent, canActivate:[AuthGuard]},
		{path:':id/edit', component:RecipeEditComponent, canActivate:[AuthGuard]},
		{path:':id', component:RecipeDetailComponent},
	]}
]

@NgModule({
	imports: [
  		RouterModule.forChild(appRoutes)
  	],
  	exports:[RouterModule],
})

export class RecipesRoutingModule{}