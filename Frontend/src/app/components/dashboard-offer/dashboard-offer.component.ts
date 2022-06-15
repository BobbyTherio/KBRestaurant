import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KBOffer } from 'src/app/interfaces/offer';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-offer',
  templateUrl: './dashboard-offer.component.html',
  styleUrls: ['./dashboard-offer.component.scss']
})
export class DashboardOfferComponent implements OnInit {

  @Input() dashboardoffer!: KBOffer;
  DashboardOfferAny: any;

  // Delete Function
  @Output() deleteEvent = new EventEmitter();

  constructor(private dashboardOfferService: UserService) { }

  ngOnInit(): void {
    this.DashboardOfferAny = this.dashboardOfferService.isAuthenticated()
  }

  // Delete Button
  clickDelete() {
    this.deleteEvent.emit(this.dashboardoffer);
  }
}
