import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { ShaerdModule} from '../shaerd/shared.module';
import { AuthInteceptor } from '../shaerd/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInteceptor } from '../shaerd/login.interceptor';

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
		ShoppingListService,
   	 	RecipeService,
   	 	{ provide: HTTP_INTERCEPTORS ,useClass: AuthInteceptor, multi: true},
   	 	{ provide: HTTP_INTERCEPTORS ,useClass: LoginInteceptor, multi: true}
   	 	
	]
})
export class CoreModule {
}