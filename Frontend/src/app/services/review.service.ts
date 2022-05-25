import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient:HttpClient) { }

  newReview(formReview:any) {
    return this.httpClient.post('http://localhost:3000/review', formReview);
  } 
}
