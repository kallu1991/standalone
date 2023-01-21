import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ServicesComponent } from './Components/services/services.component';
import { HeaderComponent } from './Components/header/header.component';

import { LayoutComponent } from './Components/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, AboutComponent, ProductsComponent, ServicesComponent, HeaderComponent, LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
