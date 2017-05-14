import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'thread',
  templateUrl: `thread.component.html`,
})
export class ThreadComponent  { 
    numberOfPosts: number;
    owner: string;
    ownerLevel: number;
    ownerText: string;
    maxParty: number;
    currentParty: number;
    newPostShow: boolean;
    modifyPostShow: boolean;
    postText: string;

  constructor(private router: Router) {
      this.newPostShow = false;
      this.modifyPostShow = false;

  }
  
  attemptJoin(){
    if(this.currentParty < this.maxParty){

    } else {
        alert("Nem tudsz csatlakozni, már betelt!")
    }
  }
  showNewPost(){
    this.newPostShow = true;
  }
  showModify(){
    this.modifyPostShow = true; 
  }
  closeNewPost(){
     this.newPostShow = false; 
     this.postText = undefined;
  }
  closeModify(){
     this.modifyPostShow = false; 
     this.postText = undefined;
  }
  confirmText(){
       if(this.postText == undefined || this.postText == ""){
          alert("Kérlek írj valamit!");
          return false;
      }
      this.closeModify();
  }
  confirmNewPost(){
      if(this.postText == undefined || this.postText == ""){
          alert("Kérlek írj valamit!");
          return false;
      }
      //TODO feldolgozás
      this.closeNewPost();
  }
  postDelete(){

  }

}