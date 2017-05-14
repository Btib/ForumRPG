import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from './login.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: `login.component.html`,
})
export class LoginComponent  { 
  username: string;
  password: string;

  constructor(private router: Router, private _loginService: LoginService) {
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
    this._loginService.postLogin(this.username, this.password).subscribe(response => {
            console.log(response.status);
             this.router.navigate(['/home']);
        }, error => {
             console.log(error.status);
             this.password = undefined;
             this.username = undefined;
             alert("Hibás username/password");
             return false;
    });   
  }
}