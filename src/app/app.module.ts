import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Components
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { HeaderComponent } from './header/header.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, PizzalistComponent, HeaderComponent, BasketComponent, HomeComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
