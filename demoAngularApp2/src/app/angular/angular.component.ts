import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {  EnrollServiceService } from '../enroll-service.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers: [SharedService]
})
export class AngularComponent implements OnInit {
  title = "Angular"
  constructor(private enrollService: SharedService, private enroll: EnrollServiceService) {

   }
  ngOnInit(): void {
  }
  OnEnroll() {
    // const enrollService = new SharedService();
    this.enrollService.OnEnrollClicked(this.title);
  }
  OnEnrollServs() {
    this.enroll.OnEnrollServ();
  }
}
