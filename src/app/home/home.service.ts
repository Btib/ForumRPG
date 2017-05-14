import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()

export class HomeService {
    constructor(private _http: Http) {}
    getThreads(): Observable<any> {
        return this._http.get('http://localhost:5000/rest/thread/showthreads').map(res => res.json());
    }
    logMeOut(){
         var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/user/logout',"",{headers: headers});
    }
}
