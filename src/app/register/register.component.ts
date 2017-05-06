import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: `register.component.html`,
})
export class RegisterComponent  { 
  email: string;
  email2: string;
  username:string;
  password: string;
  password2: string;

  constructor(private router: Router) {
  }
  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  sendRegisterData(){
    console.log(this.email + " " + this.username + " " + this.password);
  }
}