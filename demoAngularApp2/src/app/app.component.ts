import { Component, OnInit,  ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import {  EnrollServiceService } from './enroll-service.service';
import { ParentService } from './parent.service';
import { LoggerService } from './logger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollServiceService,
  ParentService,
  LoggerService
  ]
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'demoAngularApp2';
  userName = '';
  showSecret = false;
  log = [0];
  oddNumbers: number[] =[];
  evenNumbers: number[] =[];
  users: {name: string, status: string}[] = [];
  constructor(private enroll:  EnrollServiceService, private parenting: ParentService, private LoggerService: LoggerService) { }
  @ViewChildren("highlight")marker:QueryList<any>;
  @ViewChild('childView')child:CounterComponent;

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  ngOnInit() {
    this.users=this.parenting.users;
  }

  ngAfterViewInit() {
    console.log(this.marker);
    this.marker.first.nativeElement.style.color = "red";
    this.marker.last.nativeElement.style.color = "green";
  }

  inc() {
    this.child.increment();
  }

  dec() {
    this.child.decrement();
  }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  addStyle() {
    return {
     'font-size.px':20,
     'font-style': 'italic',
     'color': 'pink',
     'mx':10
    }
  }
}
