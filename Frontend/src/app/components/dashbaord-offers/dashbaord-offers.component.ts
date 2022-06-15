import { Component, OnInit } from '@angular/core';
import { KBOffer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-dashbaord-offers',
  templateUrl: './dashbaord-offers.component.html',
  styleUrls: ['./dashbaord-offers.component.scss']
})
export class DashbaordOffersComponent implements OnInit {

  offer!: KBOffer[];

  constructor(private OfferService: OfferService) { 
    OfferService.getOffers().subscribe((results) => {
      this.offer = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }
}
