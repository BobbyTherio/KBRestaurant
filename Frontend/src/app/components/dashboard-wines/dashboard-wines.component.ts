import { Component, Input, OnInit } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-wines',
  templateUrl: './dashboard-wines.component.html',
  styleUrls: ['./dashboard-wines.component.scss']
})
export class DashboardWinesComponent implements OnInit {

  @Input() dashboardwines!: KBDrink;
  DashboardWinesAny: any;

  constructor(private dashboardWinesService: UserService) { }

  ngOnInit(): void {
    this.DashboardWinesAny = this.dashboardWinesService.isAuthenticated()
  }
}
