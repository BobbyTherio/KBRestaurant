import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private httpClient:HttpClient) { }

  newContactusemail(formReview:any) {
    return this.httpClient.post('https://formspree.io/f/moqrreod', formReview);
  } 
}
