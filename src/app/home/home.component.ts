import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service'; 

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`,
})
export class HomeComponent implements OnInit { 
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
  redirectToProfile(){
    this.router.navigate(['/profile']); 
  }
  ngOnInit() {
    this.getAllThreads();
  }

  redirectToThread(id:string){
     this.router.navigate(['/thread', id]);
  }

  initiateLogout(){
    this._homeService.logMeOut().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.router.navigate(['/login']);
          },
          error => console.log(error._body)
      );
  }
  getAllThreads(){
    this._homeService.getThreads().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
          },
          error => {
            this.router.navigate(['/login']);
            console.log(error)
          }        
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
    if (this.minLvl> this.maxLvl){
      alert("Min/max szint nem jó!");
      return false;
    }
    this._homeService.addNewAdventure(this.adventureTitle, this.partySize, this.minLvl, this.maxLvl, this.description).subscribe(
          response => {
            this.getAllThreads();
          },
          error =>{
            alert(error._body);
          } 
      );
    this.closeNewAdv();
  }

}