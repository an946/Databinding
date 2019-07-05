import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  user: string;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.cast.subscribe(user => this.user = user);
  }

}
