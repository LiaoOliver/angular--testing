import { Injectable } from '@angular/core';

interface basic{
  name:string,
  age:number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): basic[]{
    return [
      {
        name:'man',
        age:18
      },
      {
        name:'waman',
        age:20
      },
      {
        name:'kid',
        age:8
      }
    ]
  }
}
