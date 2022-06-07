import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reviews } from '../interfaces/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient:HttpClient) { }

  newReview(formReview:any) {
    return this.httpClient.post('http://localhost:3000/review', formReview);
  }
  getReview() {
    return this.httpClient.get<Reviews[]>('http://localhost:3000/review');
  }
}
