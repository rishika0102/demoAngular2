import { Component, OnInit } from '@angular/core';
import {  ParentService } from '../parent.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers:[ParentService]
})
export class AdduserComponent implements OnInit {
  username: string = '';
  status: string = 'active';
  constructor(private userService: ParentService) { }

  ngOnInit(): void {
  }
  AddUser() {
    console.log("adduser", this.userService.users);
    this.userService.AddNewUser(this.username, this.status);
  }
}
