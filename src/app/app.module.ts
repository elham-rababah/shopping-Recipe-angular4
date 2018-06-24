import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppComponent } from './app.component';
import { shoppingListReducer } from './shopping-list/ngrx-store/shopping-list.reducers';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AuthModule,
    ShoppingListModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
