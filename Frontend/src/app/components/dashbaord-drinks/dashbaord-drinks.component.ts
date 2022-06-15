import { Component, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-dashbaord-drinks',
  templateUrl: './dashbaord-drinks.component.html',
  styleUrls: ['./dashbaord-drinks.component.scss']
})
export class DashbaordDrinksComponent implements OnInit {

  drink!: KBDrink[];

  constructor(private drinkService: DrinkService) {
    drinkService.getDrinks().subscribe((results) => {
      this.drink = results;
    }, (err) => {
      console.log(err);
    });
   }

  ngOnInit(): void {
  }
}
