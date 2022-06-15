import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss']
})
export class AppetizersComponent implements OnInit {
  
  @Input() appetizers!: KBFood;  
  food!:any;
  test:any;

  constructor(private service:UserService){}

  ngOnInit(): void {
    this.test = this.service.isAuthenticated()
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


