import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter:number = 0;
  @HostBinding('attr.checked')
  checked = false;
  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  toggleCheck(){
    console.log("toggle");
    this.checked = !this.checked;
  }
}

