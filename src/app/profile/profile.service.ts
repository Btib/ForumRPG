import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()

export class ProfileService {
    constructor(private _http: Http) {}
     logMeOut(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/user/logout',"",new RequestOptions({headers: headers, withCredentials: true}));
    }
    getCurrentUser(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://localhost:5000/rest/user/profile',new RequestOptions({headers: headers, withCredentials: true})).map(res => res.json());
    }
}