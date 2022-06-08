import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { FoodComponent } from './components/food/food.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OffersComponent } from './components/offers/offers.component';
import { RegisterComponent } from './components/register/register.component';
import { ReviewComponent } from './components/review/review.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'food', component: FoodComponent/* , canActivate: [AuthguardService] */},
  {path: 'drinks', component: DrinksComponent/* , canActivate: [AuthguardService] */},
  {path: 'offers', component: OffersComponent/* , canActivate: [AuthguardService] */},
  {path: 'contactus', component: ContactusComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
