import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-desserts',
  templateUrl: './dashboard-desserts.component.html',
  styleUrls: ['./dashboard-desserts.component.scss']
})
export class DashboardDessertsComponent implements OnInit {

  @Input() dashboarddesserts!: KBFood;
  DashboardDessertsAny: any;

  constructor(private dashboardDessertsService: UserService) { }

  ngOnInit(): void {
    this.DashboardDessertsAny = this.dashboardDessertsService.isAuthenticated()
  }
}
