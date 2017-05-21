import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThreadService } from './thread.service'; 

@Component({
  moduleId: module.id,
  selector: 'thread',
  templateUrl: `thread.component.html`,
})
export class ThreadComponent implements OnInit { 
    numberOfPosts: number;
    owner: string;
    ownerLevel: number;
    ownerText: string;
    maxParty: number;
    currentParty: number;
    newPostShow: boolean;
    modifyPostShow: boolean;
    profileShow: boolean;
    postText: string;
    actualUser: any;
    resp: any;
    posts: any;
    thread: any;
    id: string;
    postid:string;

  constructor(private router: Router, private _threadService:ThreadService, private route: ActivatedRoute) {
      this.newPostShow = false;
      this.modifyPostShow = false;
      this.profileShow = false;
  }
  redirectToHome(){
    this.router.navigate(['/home']); 
  }
  redirectToProfile(){
    this.router.navigate(['/profile']); 
  }
  ngOnInit(){
      this.route.params
      .subscribe((params) => this.id = params['id']);
     this.getAllPosts();
  }
  initiateLogout(){
    this._threadService.logMeOut().subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.router.navigate(['/login']);
          },
          error => console.log(error)
      );
  }
  showProfile(id:string){
    this.profileShow = true;
    this._threadService.getUser(id).subscribe(
          response => {
            this.actualUser = response;
            console.log(this.actualUser);
          },
          error => {
            console.log(error)
            alert(error._body);
          }
      );
  }
  closeProfile(){
    this.profileShow = false;   
  }
  attemptJoin(){
    if(this.currentParty < this.maxParty){
        this._threadService.joinThread(this.id).subscribe(
          response => {
            this.resp = response;
            alert("Csatlakozva!");
            console.log(this.resp);
          },
          error => {
            alert(error._body);
          }
      );
    } else {
        alert("Nem tudsz csatlakozni, már betelt!");
    }
  }
  getAllPosts(){
      this._threadService.getCurrentThread(this.id).subscribe(
          response => {
            this.thread = response;
            this.maxParty = this.thread.maxcount;
            this.currentParty = this.thread.partcount;
          },
          error => {
            this.router.navigate(['/login']);
            console.log(error);
          }
      );
      this._threadService.getPosts(this.id).subscribe(
          response => {
            console.log(response);
            this.posts = response;           
          },
          error => {
            this.router.navigate(['/login']);
            console.log(error);
          }
      );
  }
  showNewPost(){
    this.newPostShow = true;
  }
  showModify(id:string){
    this.postid = id;
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
      this._threadService.modifyPost(this.postid, this.id, this.postText).subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.getAllPosts();
          },
          error =>{
            alert(error._body);
          }
      );
      this.closeModify();
  }
  confirmNewPost(){
      if(this.postText == undefined || this.postText == ""){
          alert("Kérlek írj valamit!");
          return false;
      }
      this._threadService.addPost(this.id, this.postText).subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.getAllPosts();
          },
          error => {
            alert(error._body);
          }
      );
      this.closeNewPost();
  }
  postDelete(id:string){
      this.postid = id;
      console.log(this.postid);
      this._threadService.deletePost(this.postid).subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.getAllPosts();

          },
          error => {
            alert(error._body);
          }
      );
  }
  finishAdventure(){
    this._threadService.finishAdventure(this.id).subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.router.navigate(['/home']);
          },
          error =>{
            alert(error._body);
          }
      );
  }
  deleteProfile(id:string){
    this._threadService.banUser(id).subscribe(
          response => {
            this.resp = response;
            console.log(this.resp);
            this.router.navigate(['/home']);
          },
          error =>{
            alert(error._body);
            console.log(error)
          } 
      );
  }
}