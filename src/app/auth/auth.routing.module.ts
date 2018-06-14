import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const appRoutes : Routes = [
	{path: 'signin', component:SigninComponent},
	{path: 'signup', component:SignupComponent}	
]

@NgModule({
	imports: [
  		RouterModule.forChild(appRoutes)
  	],
  	exports:[RouterModule],
})

export class AuthRoutingModule{}