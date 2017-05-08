import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
    this.newAdventureShow = false;
  }

  initiateLogout(){
    this.router.navigate(['/login']);
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
    if(this.adventureTitle == undefined || this.adventureTitle == ""|| this.partySize == undefined || this.partySize < 1 ||  this.minLvl == undefined || this.minLvl < 1 || this.maxLvl == undefined || this.maxLvl < 1 ){
      alert("Kérlek add meg az összes infót!");
      return false;
    } 
    console.log(this.adventureTitle + " " + this.partySize + " " + this.minLvl + " " + this.maxLvl);
    this.closeNewAdv();
  }

}