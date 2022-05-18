import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {


@Input() food!: KBFood;

constructor() { }

/*    food!:KBFood[];

  constructor(private foodService:FoodService) {
    foodService.getFoods().subscribe((results) => {
      this.food = results;
    }, (err) => {
      console.log(err);
    });
   }  */

  ngOnInit(): void {
  }

}
