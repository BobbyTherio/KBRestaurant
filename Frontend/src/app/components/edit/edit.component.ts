import { Component, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';
import { KBFood } from 'src/app/interfaces/food';
import { KBOffer } from 'src/app/interfaces/offer';
import { DrinkService } from 'src/app/services/drink.service';
import { FoodService } from 'src/app/services/food.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  food!:KBFood[];
  drink!:KBDrink[];
  offer!:KBOffer[];

  constructor(private foodService: FoodService, drinkService: DrinkService, offerService: OfferService) {
    foodService.getFood().subscribe((results) => {
      this.food = results;
    }, (err) => {
      console.log(err);
    });
    drinkService.getDrinks().subscribe((results) => {
      this.drink = results;
    }, (err) => {
      console.log(err);
    });
    offerService.getOffers().subscribe((results) => {
      this.offer = results;
    }, (err) => {
      console.log(err);
    });
  }


  ngOnInit(): void {
  }

}
