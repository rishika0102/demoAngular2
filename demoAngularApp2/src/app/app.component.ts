import { Component, OnInit,  ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'demoAngularApp2';
  userName = '';
  showSecret = false;
  log = [0];
  oddNumbers: number[] =[];
  evenNumbers: number[] =[];

    @ViewChildren("highlight")marker:QueryList<any>;
    @ViewChild('childView')child:CounterComponent;
    onToggleDisplay() {
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length + 1);
    }
    ngOnInit() {

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
    onIntervalFired(firedNumber: number){
      // console.log(firedNumber);
      if(firedNumber % 2 === 0){
        this.evenNumbers.push(firedNumber);
      } else {
        this.oddNumbers.push(firedNumber);
      }
    }
}
