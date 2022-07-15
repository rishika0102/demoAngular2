import { Component, OnInit,ComponentFactoryResolver  } from '@angular/core';
import { Test1Component } from '../test1/test1.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private componentFact : ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  showComponentFcatory() {
    const component = this.componentFact.resolveComponentFactory(Test1Component)
    console.log(component);
  }

}
