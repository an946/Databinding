import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html'
       ,
  styles: []
})
export class Scenario1Component implements OnInit {
  public name = 'check here';

  constructor() { }

  ngOnInit() {
  }
  logMessage(value) {
    console.log(value);
  }

}
