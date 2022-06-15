import { Component, Input, OnInit } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-breakfasts',
  templateUrl: './dashboard-breakfasts.component.html',
  styleUrls: ['./dashboard-breakfasts.component.scss']
})
export class DashboardBreakfastsComponent implements OnInit {

  @Input() dashboardbreakfasts!: KBFood;
  DashboardBreakfastsAny: any;

  constructor(private dashboardBreakfastsService: UserService) { }

  ngOnInit(): void {
    this.DashboardBreakfastsAny = this.dashboardBreakfastsService.isAuthenticated()
  }

}
