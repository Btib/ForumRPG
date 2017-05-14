import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()

export class RegisterService {
    constructor(private _http: Http) {}
    postRegister(username: string, password:string, email: string): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/user/register', 'username=' + username +'&password='+ password + '&email=' + email, {headers: headers});
    }
}
