import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3a',
  templateUrl: './child3a.component.html',
  styleUrls: ['./child3a.component.css']
})
export class Child3aComponent implements OnInit {

    @Output() public ChildEvent2 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  message(value) {
    this.ChildEvent2.emit(value);
  }
}
