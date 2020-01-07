import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMethod():void{
    this.toggle != this.toggle
  }

}
