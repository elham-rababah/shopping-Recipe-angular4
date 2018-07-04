import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
	declarations:[
		SignupComponent,
    	SigninComponent
    ],
    imports:[
    	CommonModule,
    	FormsModule,
    	AuthRoutingModule,
    ]
})
export class  AuthModule {}