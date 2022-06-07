import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';
import { OfferComponent } from './components/offer/offer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinksComponent } from './components/drinks/drinks.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ReviewComponent } from './components/review/review.component';
import { OffersComponent } from './components/offers/offers.component';
import { MainsComponent } from './components/mains/mains.component';
import { AppetizersComponent } from './components/appetizers/appetizers.component';
import { BeersComponent } from './components/beers/beers.component';
import { WinesComponent } from './components/wines/wines.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { FooterComponent } from './components/footer/footer.component';
import { RatingComponent } from './components/rating/rating.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReviewsComponent } from './components/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FoodComponent,
    OfferComponent,
    DrinksComponent,
    ContactusComponent,
    ReviewComponent,
    OffersComponent,
    MainsComponent,
    AppetizersComponent,
    BeersComponent,
    WinesComponent,
    CocktailsComponent,
    FooterComponent,
    RatingComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
