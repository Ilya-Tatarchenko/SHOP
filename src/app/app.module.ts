//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { AppSearchComponent } from './components/header/app-search/app-search.component';
import { AppInputComponent } from './components/header/app-search/app-input/app-input.component';
import { AppBtnComponent } from './components/header/app-search/app-btn/app-btn.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsItemComponent } from './components/products/products-item/products-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavMenuComponent,
    AppSearchComponent,
    AppInputComponent,
    AppBtnComponent,
    ProductsComponent,
    ProductsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
