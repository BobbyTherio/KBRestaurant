import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  // Delete Function
  @Output() deleteEvent = new EventEmitter();

  constructor(private dashboardBreakfastsService: UserService) { }

  ngOnInit(): void {
    this.DashboardBreakfastsAny = this.dashboardBreakfastsService.isAuthenticated()
  }

  // Delete Button
  clickDelete() {
    this.deleteEvent.emit(this.dashboardbreakfasts);
  }
}
