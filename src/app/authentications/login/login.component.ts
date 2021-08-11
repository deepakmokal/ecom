import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  retunValue: any =''
  
  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.required]),
    password: new FormControl('', Validators.required),
  });
  constructor( private authService: AuthServiceService,
    private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    debugger;
    
  let isPresent =  this.authService.checkUser(this.loginForm.value).subscribe( data => {
    debugger;
    this.retunValue = data;
    this.findUserLoggedType(this.retunValue[0].usertype);
    
    if(this.retunValue[0].password == this.loginForm.controls['password'].value){
      console.log('User Found');
      this.route.navigate(['/products'])
      localStorage.setItem('token', 'fakeToken');
      
    }
    else{
      console.log('User not Found');
      alert("Invalid Credential, User not found!")
    }
  });
    
    
    // TODO: Use EventEmitter with form value
   
  }

  findUserLoggedType(user){
    debugger
    if(user == 'admin'){
      debugger
      localStorage.setItem('loggedUser', 'admin')
    }
    else{
      // this.authService.isLoggedUserIsAdmin = false
      localStorage.setItem('loggedUser', 'user')
    }

  }

}
