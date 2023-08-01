import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseURL = 'http://localhost:3000/';
  isLoggedUserIsAdmin = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  //Adding a new user
  pushUser(body: any) {
    
    return this.http.post(`${this.baseURL}/users`, body, {
      observe: body,
    });
  }

  checkUser(formdata: any) {
    
    let username = formdata.userName;
    let password = formdata.password;

    return this.http.get(`http://localhost:3000/users?username=${username}`);
  }

  isAuthenticated() {
    let token = localStorage.getItem('token');
    return token != null;
  }
}
