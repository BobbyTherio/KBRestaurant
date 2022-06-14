import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KBFood } from '../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }

  getFood() {
    return this.httpClient.get<KBFood[]>('http://localhost:3000/food');
  }

  newFood(formFood:any) {
    return this.httpClient.post('http://localhost:3000/food', formFood);
  }
  
  editFood(id:any,formFood:any) {
    return this.httpClient.patch(`http://localhost:3000/food/${id}`, formFood);
  }

  deleteFood(id:any) {
    return this.httpClient.delete(`http://localhost:3000/food/${id}`);
  }
}
