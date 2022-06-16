import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KBOffer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private httpClient:HttpClient) { }

  getOffers() {
    return this.httpClient.get<KBOffer[]>('http://localhost:3000/promo')
  }

  newOffer(formOffer:any) {
    return this.httpClient.post('http://localhost:3000/promo', formOffer);
  }

  updateOffer(id:any, formOffer:any) {
    return this.httpClient.patch(`http://localhost:3000/promo/`+id, formOffer);
  }

  deleteOffer(id:any) {
    return this.httpClient.delete(`http://localhost:3000/promo/${id}`);
  }

  getOfferID(id:any){
    return this.httpClient.get(`http://localhost:3000/promo/${id}`)
  }
}
