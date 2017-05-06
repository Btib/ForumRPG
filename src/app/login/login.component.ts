import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: `login.component.html`,
})
export class LoginComponent  { 
  username: string;
  password: string;

  constructor(private router: Router) {
  }

  redirectToRegister(){
    this.router.navigate(['/register']);
  }

  sendLoginData(){
    console.log(this.username + " " + this.password);
  }
}