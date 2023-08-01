import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userValue: any = [];
  constructor(
    private authService: AuthServiceService,
    private router : Router
  ) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.email),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cnfpassword: new FormControl('', Validators.required),
    });
  
  }

  onSubmit(){
    
    let formsValue = this.registerForm.value;
    let userTypeObj = { 'usertype': 'user' }
    let user = Object.assign(userTypeObj, formsValue)
    this.userValue.push(user); 
    this.authService.pushUser(this.userValue).subscribe(
      data => console.log(`Registration sucessful`),
      err => console.log(err)
    )
  }

}
