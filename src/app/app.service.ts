import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    public _data: DataService
  ) { }

  getValue(x, y):number{
    return x + y;
  }

  getData(){
    let dataSet = this._data.getData();
    dataSet.push({name:'child',age:11})
    return dataSet;
  }

  // 觀察者物件
  getObservableValue() { return of('observable Clover'); }

  // promise 物件
  getPromiseValue() { return Promise.resolve('promise value'); }

}
