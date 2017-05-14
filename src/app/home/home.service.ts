import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()

export class HomeService {
    constructor(private _http: Http) {}
    getThreads(): Observable<any> {
        //Access-Control-Allow-Origin?
        //{withCredentials: true}???
        return this._http.get('http://localhost:5000/rest/thread/showthreads').map(res => res.json());
    }
    logMeOut(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/user/logout',"",{headers: headers});
    }
    addNewAdventure(adventureTitle:string, partySize:number, minLvl:number, maxLvl:number, description:string){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://localhost:5000/rest/thread/new', 'title='+ adventureTitle + '&maxcount=' + partySize + '&minlevel=' + minLvl + '&maxlevel=' + maxLvl + '&mainpost=' + description,{headers: headers});
    }
}
