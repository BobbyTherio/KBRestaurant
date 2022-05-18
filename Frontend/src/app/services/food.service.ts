import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KBFood } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getFoods() {
    return this.httpClient.get<KBFood[]>('http://localhost:3000/food');
  }
}
