import { Component, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinks!:KBDrink[];

  constructor(private drinkService:DrinkService) {
    drinkService.getDrinks().subscribe((results) => {
      this.drinks = results;
    }, (err) => {
      console.log(err);
    });
   }

  ngOnInit(): void {
  }

}
