import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
    ) { }

    url = 'http://localhost:3000';

    getSpecificUser(email:string) {
      return this.http.get(`${this.url}/signup/${email}`);
    }
    
    saveUser(_user: Post) {
      return this.http.post(`${this.url}/signup`, _user);
    }

}
