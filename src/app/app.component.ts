import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
Router
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecom';
  constructor(private router: Router, 
    public authService: AuthServiceService,
    ){}
  logout(){
    localStorage.clear();
     this.router.navigate(['auth/login']);
  }
}
