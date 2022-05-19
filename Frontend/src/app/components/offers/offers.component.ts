import { Component, OnInit } from '@angular/core';
import { KBOffer } from 'src/app/interfaces/offer';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offers!:KBOffer[];

  constructor(private offerService:OfferService) {
    offerService.getOffers().subscribe((results) => {
      this.offers = results;
    }, (err) => {
      console.log(err);
    });
   }

  ngOnInit(): void {
  }

}
