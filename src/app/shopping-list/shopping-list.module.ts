import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
	declarations:[
		ShoppingListComponent,
    	ShoppingEditComponent
    ],
    imports:[
    	CommonModule,
    	FormsModule
    ]
})
export class  ShoppingListModule {}