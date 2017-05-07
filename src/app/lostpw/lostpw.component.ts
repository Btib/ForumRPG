import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'lostpw',
  templateUrl: `lostpw.component.html`,
})
export class LostpwComponent  { 
  email: string;

  constructor(private router: Router) {
  }

  redirectToRegister(){
    this.router.navigate(['/register']);
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }
  sendLoginData(){
    console.log(this.email);
  }
}