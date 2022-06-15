import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KBDrink } from 'src/app/interfaces/drink';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-cocktails',
  templateUrl: './dashboard-cocktails.component.html',
  styleUrls: ['./dashboard-cocktails.component.scss']
})
export class DashboardCocktailsComponent implements OnInit {

  @Input() dashboardcocktails!: KBDrink;
  DashboardCocktailsAny: any;

  // Delete Function
  @Output() deleteEvent = new EventEmitter();

  constructor(private dashboardCocktailsService: UserService) { }

  ngOnInit(): void {
    this.DashboardCocktailsAny = this.dashboardCocktailsService.isAuthenticated()
  }

  // Delete Button
  clickDelete() {
    this.deleteEvent.emit(this.dashboardcocktails);
  }
}
