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

  redirectToLostpw(){
    this.router.navigate(['/lostpw']);
  }


  sendLoginData(){
    if(this.username == undefined || this.username == ""|| this.password == undefined || this.password == ""){
      alert("Kérem írja be a felhasználónevet/jelszót!");
      return false;
    } 
    console.log(this.username + " " + this.password);
    this.router.navigate(['/home']);
  }
}