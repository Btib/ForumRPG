import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThreadService } from './thread.service'; 

@Component({
  moduleId: module.id,
  selector: 'thread',
  templateUrl: `thread.component.html`,
})
export class ThreadComponent { 
    numberOfPosts: number;
    owner: string;
    ownerLevel: number;
    ownerText: string;
    maxParty: number;
    currentParty: number;
    newPostShow: boolean;
    modifyPostShow: boolean;
    postText: string;
    resp: any;
    id: string;
    postid:string;

  constructor(private router: Router, private _threadService:ThreadService, private route: ActivatedRoute) {
      this.newPostShow = false;
      this.modifyPostShow = false;
  }
  ngOnInit(){
      this._threadService.getPosts().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
          },
          //this.router.navigate(['/login']);
          error => console.log(error)
      );
      /*
      this.route.params
      .subscribe((params) => this.id = params['id']);*/
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
  showModify(/*id:string*/){
    //this.postid = id;
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
      this._threadService.modifyPost(this.postid, this.id, this.postText);
      this.closeModify();
  }
  confirmNewPost(){
      if(this.postText == undefined || this.postText == ""){
          alert("Kérlek írj valamit!");
          return false;
      }
      this._threadService.addPost(this.id, this.postText);
      this.closeNewPost();
  }
  postDelete(/*id:string*/){
      //this.postid = id;
      this._threadService.deletePost(this.postid);
  }
}