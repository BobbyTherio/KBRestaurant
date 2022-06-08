import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(formData:object){
    return this.http.post('http://localhost:3000/login', formData);
  }

  register(formData:object){
    return this.http.post('http://localhost:3000/register', formData);
  }

  getAuthUser(){
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  isAuthenticated(){
    return this.getAuthUser() ? true: false;
  }
}
