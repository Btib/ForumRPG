import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService} from './register.service';

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

  constructor(private router: Router, private _regservice: RegisterService) {
  }
  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  sendRegisterData(){
    if(this.username == undefined || this.username == ""|| this.password == undefined || this.password == "" || this.email == undefined || this.email == ""|| this.email2 == undefined || this.email2 == "" || this.password2 == undefined || this.password2 == ""){
      alert("Kérem írjon be minden adatot!");
      return false;
    } 
    if (this.email != this.email2){
      alert("A két e-mail cím nem egyezik!");
      return false;
    }
    if (this.password != this.password2){
      alert("A két jelszó nem egyezik!");
      return false;
    }
    this._regservice.postRegister(this.username,this.password,this.email)
      .subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        });
  
  }
}