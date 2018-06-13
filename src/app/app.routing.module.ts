import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list//shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {  AuthGuard } from './auth/auth-guard.service';

const appRoutes : Routes = [
	{path: '', redirectTo:'/recipes', pathMatch:'full' },
	{path: 'recipes', component:RecipesComponent, children:[
		{path:'', component:RecipesStartComponent},
		{path:'new', component:RecipeEditComponent, canActivate:[AuthGuard]},
		{path:':id/edit', component:RecipeEditComponent, canActivate:[AuthGuard]},
		{path:':id', component:RecipeDetailComponent},
	]},
	{path: 'shopping-list', component:ShoppingListComponent},
	{path: 'signin', component:SigninComponent},
	{path: 'signup', component:SignupComponent}	
]

@NgModule({
	imports: [
  		RouterModule.forRoot(appRoutes)
  	],
  	exports:[],
})

export class AppRoutingModule{}