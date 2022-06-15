import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-appetizer',
  templateUrl: './dashboard-appetizer.component.html',
  styleUrls: ['./dashboard-appetizer.component.scss']
})
export class DashboardAppetizerComponent implements OnInit {

  @Input() dashboardappetizers!: KBFood;
  DashboardAppetizersAny:any;

  constructor(private dashboardAppetizersService: UserService) { }

  ngOnInit(): void {
    this.DashboardAppetizersAny = this.dashboardAppetizersService.isAuthenticated()
  }

}
