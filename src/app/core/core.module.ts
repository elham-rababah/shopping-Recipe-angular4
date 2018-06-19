import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth/auth.service';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShaerdModule} from '../shaerd/shared.module';

@NgModule({
	declarations: [
		HeaderComponent,
    	HomeComponent
	],
	imports:[
		RouterModule,
		CommonModule,
		ShaerdModule
	],
	exports: [
		HeaderComponent,
	],
	providers: [
		AuthService,
		ShoppingListService,
   	 	RecipeService,
	]
})
export class CoreModule {
}