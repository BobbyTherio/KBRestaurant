import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss']
})
export class AppetizersComponent implements OnInit {
  
  @Input() appetizers!: KBFood;  
  food!:any;
  

  constructor()
   {

   }

  ngOnInit(): void {
    // this.foodService.getFood().subscribe((results) => {
    //   this.food = results;      
    // }, (err) => {
    //   console.log(err);
    // });
  }

  // editAppetizers(value:any){
  //   this.appetizersItemId.emit(8)
  //   alert(value)
    
   
  //   // alert(this.appetizers.food_id)
  //   // this.appetizersItemId.emit(this.appetizers.food_id);
  //   // this.appetizersItemId.emit(this.appetizers.food_id);
  //    }


  }


