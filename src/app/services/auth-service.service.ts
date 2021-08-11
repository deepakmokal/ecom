import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  baseURL = "http://localhost:3000/";
  isLoggedUserIsAdmin:boolean;
  loggedUser: string = localStorage.getItem('loggedUser')
  constructor(
    
    private http: HttpClient ) {
      
     this.findLoggedUser(this.loggedUser);
     }

  //Adding a new user
  pushUser(body: any){
    debugger
    return this.http.post(`${this.baseURL}/users`, body , {
      observe: body
    } )
  }
  
  checkUser(formdata: any){
    debugger;
   let username = formdata.userName;
   let password = formdata.password
    
   return this.http.get(`http://localhost:3000/users?username=${username}`)
  }

  
   findLoggedUser = function(loggedUser){
    debugger;
    console.log(loggedUser)
    if(loggedUser == 'admin'){
      this.isLoggedUserIsAdmin = true
    }
    else{
      this.isLoggedUserIsAdmin = false
    }
  }

  isAuthenticated(){
    let token = localStorage.getItem('token');
    return token != null;
  }

  isAdmin(){

  }

}
