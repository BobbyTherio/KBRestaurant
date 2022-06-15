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

  deleteOffer(dashboardoffer:KBOffer) {
    this.OfferService.deleteOffer(dashboardoffer.promo_id).subscribe((results) => {
      console.log(results);

      //Remove breakfast from our browser view
      //Find index of the breakfast we want to delete
      let index = this.offer.findIndex(o => {
        return o.promo_id === dashboardoffer.promo_id;
      });

      //Delete breakfast from drink
      this.offer.splice(index, 1);

    }, (err) => {
      console.log(err)
    });
  }
}
