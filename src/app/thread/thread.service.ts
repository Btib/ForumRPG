import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()

export class ThreadService {
    constructor(private _http: Http) {}

    getPosts(id: string): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/post/showposts', 'threadid=' + id ,new RequestOptions({headers: headers, withCredentials: true})).map(res => res.json());
    }

    getCurrentThread(id:string): Observable<any>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/thread/get', 'threadid=' + id ,new RequestOptions({headers: headers, withCredentials: true})).map(res => res.json());
    }
    logMeOut(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/user/logout',new RequestOptions({headers: headers, withCredentials: true}));
    }
    deletePost(postid:string){
        var body = 'postid=' + postid;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new RequestOptions({
            headers: headers,
            body : body,
            withCredentials: true
        });
        return this._http.delete('http://localhost:5000/rest/post/del',options);
    }
    modifyPost(postid:string, threadid:string,text:string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/post/mod', 'postid=' + postid + '&threadid=' + threadid + '&text=' + text,new RequestOptions({headers: headers, withCredentials: true}));
    }
    addPost(threadid: string, text:string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/post/new', 'threadid=' + threadid + '&text=' + text,new RequestOptions({headers: headers, withCredentials: true}));
    }
    joinThread(threadid:string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/thread/join', 'threadid=' + threadid ,new RequestOptions({headers: headers, withCredentials: true}));
    }
    finishAdventure(threadid:string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/thread/finish', 'threadid=' + threadid ,new RequestOptions({headers: headers, withCredentials: true}));
    }
}
