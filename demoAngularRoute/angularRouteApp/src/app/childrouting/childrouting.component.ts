import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-childrouting',
  templateUrl: './childrouting.component.html',
  styleUrls: ['./childrouting.component.css']
})
export class ChildroutingComponent implements OnInit, OnChanges {

  @Input() test: boolean = false;
  @Input() testNext: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnint called");
  }

  changeTest(): void {
    console.log(this.test);
    // this.test = true;
    console.log("After change value", this.test)
  }

   testNextChng() {
    console.log("Test Next change");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes... ", changes)
    console.log(this.testNext);
    if(this.testNext) {
      this.testNextChng();
    }
    // for(let x in changes){
    //   console.log("Changes....",changes);
    // }
  }
}
