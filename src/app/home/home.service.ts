import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()

export class HomeService {
    constructor(private _http: Http) {}
    getThreads(): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get('http://localhost:5000/rest/thread/showthreads',new RequestOptions({headers: headers, withCredentials: true})).map(res => res.json());
    }
    logMeOut(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/user/logout',"",new RequestOptions({headers: headers, withCredentials: true}));
    }
    addNewAdventure(adventureTitle:string, partySize:number, minLvl:number, maxLvl:number, description:string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log("itt még jó");
        return this._http.post('http://localhost:5000/rest/thread/new', 'title='+ adventureTitle + '&maxcount=' + partySize + '&minlevel=' + minLvl + '&maxlevel=' + maxLvl + '&mainpost=' + description,new RequestOptions({headers: headers, withCredentials: true}));
    }
}
