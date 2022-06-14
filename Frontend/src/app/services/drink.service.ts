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
  
  newDrink(formDrink:any) {
    return this.httpClient.post('http://localhost:3000/drink', formDrink);
  }

  updateDrink(id:any, formDrink:any) {
    return this.httpClient.patch('http://localhost:3000/drink'+ id, formDrink);
  }

  deleteDrink(id:any) {
    return this.httpClient.delete(`http://localhost:3000/drink/${id}`);
  }
}
