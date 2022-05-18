import { Component, Input, OnInit } from '@angular/core';
import { KBOffer } from 'src/app/interfaces/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Input() offer!: KBOffer;
  
  constructor() { }

  ngOnInit(): void {
  }

}
