import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttptestService {

  constructor(
    public _http: HttpClient
  ) { }

  getAPI() {
    return this._http.get('https://enigmatic-chamber-83707.herokuapp.com/air');
  }

}
