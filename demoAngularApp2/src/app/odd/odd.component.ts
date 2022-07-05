import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() number: number;
  pointStatus = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getPoints() {
    this.pointStatus = 1;
    setTimeout(() => {
      this.pointStatus = 2
    }, 2000);
  }

}
