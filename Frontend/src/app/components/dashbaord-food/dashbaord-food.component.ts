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
}
