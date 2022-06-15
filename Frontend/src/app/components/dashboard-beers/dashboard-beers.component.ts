import { Component, Input, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-beers',
  templateUrl: './dashboard-beers.component.html',
  styleUrls: ['./dashboard-beers.component.scss']
})
export class DashboardBeersComponent implements OnInit {

  @Input() dashboardbeers!: KBDrink;
  DashboardBeersAny: any;

  constructor(private dashboardBeersService: UserService) { }

  ngOnInit(): void {
    this.DashboardBeersAny = this.dashboardBeersService.isAuthenticated()
  }
}
