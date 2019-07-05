import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
   user: string;
   edituser: string;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.cast.subscribe(user => this.user = user);
  }
  onclick() {
    this.userservice.editUser(this.edituser);
  }


}
