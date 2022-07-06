import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {  EnrollServiceService } from '../enroll-service.service';
import {  ParentService } from '../parent.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers: [EnrollServiceService]
})

export class JavascriptComponent implements OnInit {

  title = "Javascript"
  constructor(private enroll:  EnrollServiceService, private parents: ParentService) { }
  ngOnInit(): void {
  }
  OnEnroll() {
    const enrollService = new SharedService();
    enrollService.OnEnrollClicked(this.title);
  }
  OnEnrollServs() {
    this.enroll.OnEnrollServ();
  }
  parentServ() {
    this.parents.parentServices();
  }
}
