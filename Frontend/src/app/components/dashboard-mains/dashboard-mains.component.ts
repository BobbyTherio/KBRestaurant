import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KBFood } from 'src/app/interfaces/food';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-mains',
  templateUrl: './dashboard-mains.component.html',
  styleUrls: ['./dashboard-mains.component.scss']
})
export class DashboardMainsComponent implements OnInit {

  @Input() dashboardmains!: KBFood;
  DashboardMainsAny:any;

  // Delete Function
  @Output() deleteEvent = new EventEmitter();

  constructor(private dashboardMainsService:UserService) { }

  ngOnInit(): void {
    this.DashboardMainsAny = this.dashboardMainsService.isAuthenticated()
  }

  // Delete Button
  clickDelete() {
    this.deleteEvent.emit(this.dashboardmains);
  }
}
