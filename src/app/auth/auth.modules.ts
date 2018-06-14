import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
	declarations:[
		SignupComponent,
    	SigninComponent
    ],
    imports:[
    	CommonModule,
    	FormsModule
    ]
})
export class  AuthModule {}