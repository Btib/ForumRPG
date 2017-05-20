import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()

export class LoginService {
    constructor(private _http: Http) {}
    postLogin(username: string, password:string): Observable<any> {
        var headers = new Headers();
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/user/login', 'username=' + username + '&password=' + password, new RequestOptions({headers: headers, withCredentials: true}));
    }
}
