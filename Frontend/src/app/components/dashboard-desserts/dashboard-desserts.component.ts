import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  // Delete Function
  @Output() deleteEvent = new EventEmitter();

  constructor(private dashboardDessertsService: UserService) { }

  ngOnInit(): void {
    this.DashboardDessertsAny = this.dashboardDessertsService.isAuthenticated()
  }

  // Delete Button
  clickDelete() {
    this.deleteEvent.emit(this.dashboarddesserts);
  }
}
