import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-childroute',
  templateUrl: './childroute.component.html',
  styleUrls: ['./childroute.component.css']
})
export class ChildrouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   const promise = new Promise(resolve =>{
   console.log('promise call..');
   setTimeout(()=>{
     resolve('promise working');
   }, 1000)
  })
  promise.then(result => console.log(result));

  const observable = new Observable(sub =>{
    console.log('observable call');
    setTimeout(()=>{
      sub.next('observable working');
      sub.next('observable working');
      sub.next('observable working');
    }, 1000)
  });
  observable.subscribe(result => console.log(result));
  }

}
