import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    ProductListComponent,
  ], // HTML tarafındaki angular bileşenlerini tanımlar
  imports: [BrowserModule, AppRoutingModule], // Angular modülleri import edeceğimiz yer
  providers: [], // IoC Container'daki Dependency Injection'ları tanımlar
  bootstrap: [AppComponent], // Hangi bileşenin ilk açıldığında çalışacağını belirtir
})
export class AppModule {}
