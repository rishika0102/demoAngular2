import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    console.log("life cycle method called");
    this.dataservice.dataEmitter.subscribe((value)=> {
      this.inputText = value;
    })
  }
 inputText: string;
}
