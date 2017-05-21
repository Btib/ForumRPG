import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service'; 


@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent implements OnInit {
    resp: any; 

  constructor(private router: Router, private _profileService : ProfileService) {
  }

  ngOnInit(){
    this._profileService.getCurrentUser().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
          },
          error => console.log(error)
      );
  }
  redirectToHome(){
    this.router.navigate(['/home']); 
  }
  initiateLogout(){
    this._profileService.logMeOut().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.router.navigate(['/login']);
          },
          error => console.log(error)
      );
  }
}