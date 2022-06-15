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

  deleteBeer(dashboardbeers:KBDrink) {
    this.drinkService.deleteDrink(dashboardbeers.drink_id).subscribe((results) => {
      console.log(results);

      //Remove breakfast from our browser view
      //Find index of the breakfast we want to delete
      let index = this.drink.findIndex(d => {
        return d.drink_id === dashboardbeers.drink_id;
      });

      //Delete breakfast from drink
      this.drink.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }

  deleteCocktail(dashboardcocktails:KBDrink) {
    this.drinkService.deleteDrink(dashboardcocktails.drink_id).subscribe((results) => {
      console.log(results);

      //Remove main from our browser view
      //Find index of the main we want to delete
      let index = this.drink.findIndex(d => {
        return d.drink_id === dashboardcocktails.drink_id;
      });

      //Delete main from drink
      this.drink.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }

  deleteWine(dashboardwines:KBDrink) {
    this.drinkService.deleteDrink(dashboardwines.drink_id).subscribe((results) => {
      console.log(results);

      //Remove appetizer from our browser view
      //Find index of the appetizer we want to delete
      let index = this.drink.findIndex(d => {
        return d.drink_id === dashboardwines.drink_id;
      });

      //Delete appetizer from drink
      this.drink.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }
}
