import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { ShaerdModule} from './shaerd/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    ShaerdModule,
    AuthModule,
    ShoppingListModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
