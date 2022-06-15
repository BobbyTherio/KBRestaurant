import { Component, OnInit,Input } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-food-items',
  templateUrl: './dashboard-food-items.component.html',
  styleUrls: ['./dashboard-food-items.component.scss']
})
export class DashboardFoodItemsComponent implements OnInit {
  @Input() dashboardappetizers!: KBFood;  
  food!:any;
  test:any;
  

  constructor(
    private service:UserService,
  )
   {

   }

  ngOnInit(): void {
    this.test = this.service.isAuthenticated()
    
  }
}
