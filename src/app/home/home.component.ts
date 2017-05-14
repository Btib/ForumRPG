import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service'; 

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`,
})
export class HomeComponent  { 
  newAdventureShow: boolean;
  adventureTitle: string;
  partySize: number;
  minLvl: number;
  maxLvl: number;
  description: string;
  resp: any;

  constructor(private router: Router, private _homeService: HomeService) {
    this.newAdventureShow = false;
  }

  ngOnInit() {
    this._homeService.getThreads().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
          },
          //this.router.navigate(['/login']);
          error => console.log(error)
      );
  }

  redirectToThread(){
     this.router.navigate(['/thread']);
  }

  initiateLogout(){
    this._homeService.logMeOut().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.router.navigate(['/login']);
          },
          error => console.log(error)
      );
  }

  closeNewAdv(){
    this.newAdventureShow = false;
    this.adventureTitle = undefined;
    this.partySize = undefined;
    this.minLvl = undefined;
    this.maxLvl = undefined;
  }
  showNewAdventurePopup(){
    this.newAdventureShow = true;
  }
  confirmNewAdventure(){
    if(this.adventureTitle == undefined || this.adventureTitle == ""|| this.description == undefined || this.description == ""|| this.partySize == undefined || this.partySize < 1 ||  this.minLvl == undefined || this.minLvl < 1 || this.maxLvl == undefined || this.maxLvl < 1 ){
      alert("Kérlek add meg az összes infót!");
      return false;
    } 
    console.log(this.adventureTitle + " " + this.partySize + " " + this.minLvl + " " + this.maxLvl);
    this.closeNewAdv();
  }

}