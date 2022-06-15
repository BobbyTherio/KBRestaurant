import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  // Delete Function
  @Output() deleteEvent = new EventEmitter();

  constructor(private dashboardAppetizersService: UserService) { }

  ngOnInit(): void {
    this.DashboardAppetizersAny = this.dashboardAppetizersService.isAuthenticated()
  }

  // Delete Button
  clickDelete() {
    this.deleteEvent.emit(this.dashboardappetizers);
  }
}
