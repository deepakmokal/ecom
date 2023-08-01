import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ecom';
  isLoggedUserIsAdmin;
  constructor(private router: Router, 
    public authService: AuthServiceService,
    ){}
  logout(){
    localStorage.clear();
     this.router.navigate(['auth/login']);
  }

  ngOnInit(){
    
    this.getLoggedUser();
    this.authService.isLoggedUserIsAdmin.subscribe(
      data => {
        console.log(data)
        this.isLoggedUserIsAdmin = data
      },
      error => console.log(error)
    )
  }

  getLoggedUser(){
    if(localStorage.getItem('loggedUser') == 'admin'){
      this.authService.isLoggedUserIsAdmin.next(true)
    }
    else {
      this.authService.isLoggedUserIsAdmin.next(false);
    }
  }

  ngOnDestroy(){
    this.authService.isLoggedUserIsAdmin.unsubscribe();
  }

  
}
