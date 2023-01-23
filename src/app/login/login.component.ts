import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private router:Router){}

  loginForm = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  })

  get username(){
    return this.loginForm.get("username")
  }

  get password(){
    return this.loginForm.get("password")
  }


  authenticate(){
    console.log(this.loginForm.value);
      
    this.router.navigateByUrl("home")
  }
}
