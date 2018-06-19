import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth/auth.service';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HeaderComponent,
    	HomeComponent
	],
	imports:[
		RouterModule,
		CommonModule
	],
	exports: [
		HeaderComponent,
	],
	providers: [
		AuthService
	]
})
export class CoreModule {
}