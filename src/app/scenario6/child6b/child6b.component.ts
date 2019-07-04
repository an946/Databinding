import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child6b',
  templateUrl: './child6b.component.html',
  styleUrls: ['./child6b.component.css']
})
export class Child6bComponent implements OnInit {
@Input() public parentdata;
  constructor() { }

  ngOnInit() {
  }

}
