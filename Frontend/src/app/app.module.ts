import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { DrinkComponent } from './components/drink/drink.component';
import { OfferComponent } from './components/offer/offer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksComponent } from './components/drinks/drinks.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ReviewComponent } from './components/review/review.component';
import { OffersComponent } from './components/offers/offers.component';
import { MainsComponent } from './components/mains/mains.component';
import { AppetizersComponent } from './components/appetizers/appetizers.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FoodComponent,
    DrinkComponent,
    OfferComponent,
    DrinksComponent,
    ContactusComponent,
    ReviewComponent,
    OffersComponent,
    MainsComponent,
    AppetizersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
