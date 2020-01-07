import { Injectable } from '@angular/core';
import { DataService } from './data.service';

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

}
