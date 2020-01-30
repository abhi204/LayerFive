import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_url = 'http://localhost:8000/user/';

  constructor( private http: HttpClient) { }

  getList(){
    return this.http.get(this.user_url);
  }
}
