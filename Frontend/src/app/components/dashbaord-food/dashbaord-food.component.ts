import { Component, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-dashbaord-food',
  templateUrl: './dashbaord-food.component.html',
  styleUrls: ['./dashbaord-food.component.scss']
})
export class DashbaordFoodComponent implements OnInit {

  food!:KBFood[];

  constructor(private foodService: FoodService) { 
    foodService.getFood().subscribe((results) => {
      this.food = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

  deleteBreakfast(dashboardbreakfasts:KBFood) {
    this.foodService.deleteFood(dashboardbreakfasts.food_id).subscribe((results) => {
      console.log(results);

      //Remove breakfast from our browser view
      //Find index of the breakfast we want to delete
      let index = this.food.findIndex(f => {
        return f.food_id === dashboardbreakfasts.food_id;
      });

      //Delete breakfast from food
      this.food.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }

  deleteMain(dashboardmains:KBFood) {
    this.foodService.deleteFood(dashboardmains.food_id).subscribe((results) => {
      console.log(results);

      //Remove main from our browser view
      //Find index of the main we want to delete
      let index = this.food.findIndex(f => {
        return f.food_id === dashboardmains.food_id;
      });

      //Delete main from food
      this.food.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }

  deleteAppetizer(dashboardappetizers:KBFood) {
    this.foodService.deleteFood(dashboardappetizers.food_id).subscribe((results) => {
      console.log(results);

      //Remove appetizer from our browser view
      //Find index of the appetizer we want to delete
      let index = this.food.findIndex(f => {
        return f.food_id === dashboardappetizers.food_id;
      });

      //Delete appetizer from food
      this.food.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }

  deleteDessert(dashboarddesserts:KBFood) {
    this.foodService.deleteFood(dashboarddesserts.food_id).subscribe((results) => {
      console.log(results);

      //Remove dessert from our browser view
      //Find index of the dessert we want to delete
      let index = this.food.findIndex(f => {
        return f.food_id === dashboarddesserts.food_id;
      });

      //Delete dessert from food
      this.food.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }
}

