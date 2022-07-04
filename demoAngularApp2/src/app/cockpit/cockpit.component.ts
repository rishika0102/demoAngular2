import { Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit,OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
    @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log("constructor called");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("on change called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
  }
  ngDoCheck() {
    console.log("ngDoCheck called");
  }
  ngAfterContentInit() {
    console.log("ng after content called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }
  ngAfterViewInit() {
     console.log("ngAfterViewChecked called");
  }
  ngOnDestroy() {
    console.log("ngdistroy called");
  }
}
