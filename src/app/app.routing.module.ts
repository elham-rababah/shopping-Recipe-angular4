import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list//shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes : Routes = [
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