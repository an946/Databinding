import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child3b',
  templateUrl: './child3b.component.html',
  styleUrls: ['./child3b.component.css']
})
export class Child3bComponent implements OnInit {
  @Output() public ChildEvent1 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent1(value) {
    this.ChildEvent1.emit(value);
  }
}
