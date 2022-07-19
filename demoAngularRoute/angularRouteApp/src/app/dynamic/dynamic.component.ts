import { Component, OnInit } from '@angular/core';
import {TestComponent} from '../test/test.component';
import {Test1Component} from '../test1/test1.component';
import {Test2Component} from '../test2/test2.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  dynamics:any = 'Test';
  constructor() { }

  ngOnInit(): void {
    console.log("dynamic");
  }

  assignComponent(com:any) {
    if(com === 'Test') {
      this.dynamics = TestComponent;
    }
    else if(com === 'Test1') {
      this.dynamics = Test1Component;
    }
    else if(com === 'Test2') {
      this.dynamics = Test2Component;
    }
  }

}
