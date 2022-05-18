import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KBDrink } from '../interfaces/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private httpClient:HttpClient) { }

  getDrinks() {
    return this.httpClient.get<KBDrink[]>('http://localhost:3000/drink');
  }
}
