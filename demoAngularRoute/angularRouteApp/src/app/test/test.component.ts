import { Component, OnInit,ComponentFactoryResolver  } from '@angular/core';
import { Test1Component } from '../test1/test1.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private dataService: DataService, private componentFact : ComponentFactoryResolver) { }
  // constructor() { }
  ngOnInit(): void {
  }
  showComponentFcatory() {
    const component = this.componentFact.resolveComponentFactory(Test1Component)
    console.log(component);
  }

}
