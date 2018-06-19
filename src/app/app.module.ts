import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { ShaerdModule} from './shaerd/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    ShaerdModule,
    AuthModule,
    ShoppingListModule,
    CoreModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
