import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth/auth.service';
import { AppRoutingModule } from '../app.routing.module';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		HeaderComponent,
    	HomeComponent
	],
	imports:[
		AppRoutingModule,
		RouterModule,
		CommonModule
	],
	exports: [
		HeaderComponent,
		AppRoutingModule
	],
	providers: [
		AuthService
	]
})
export class CoreModule {
}