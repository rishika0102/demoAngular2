import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, of, from, map, filter } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.css']
})
export class StaticDataComponent implements OnInit {

   enteredText: string ;
  constructor(private route: ActivatedRoute, private dataservice: DataService) { }
  array1 = [9, 8, 7, 6, 5];
  ngOnInit() {
    this.route.data.subscribe((data: Data)=>{
      console.log("datas", data);
    })
    this.myObservable.subscribe((val)=>{
      console.log("values", val);
    },
     (error)=>{
       alert(error.message);
    }, () => {
      alert('observable complete');
    }
    );
    this.myObservable1.subscribe((val:any)=>{
      console.log("values,", val);
    },
     (error:any)=>{
       alert(error.message);
    }, () => {
      alert('observable complete of method create');
    }
    );
    this.transform.subscribe((val:any)=>{
      // debugger
      console.log("values transform", val);
    },
     (error:any)=>{
       alert(error.message);
    }, () => {
      alert('observable complete of method create');
    }
    );
    this.myObservable3.subscribe((val:any)=>{
      console.log("values", val);
    },
     (error:any)=>{
       alert(error.message);
    }, () => {
      alert('observable complete of method create');
    }
    );
     this.transform1.subscribe((val:any)=>{
      console.log("values transform1", val);
    },
     (error:any)=>{
       alert(error.message);
    }, () => {
      alert('observable complete of method create');
    }
    );

  }
    OnBtnClick(){
     console.log(this.enteredText);
     this.dataservice.raiseDataEmitterEvent(this.enteredText);
   }
  myObservable = new Observable((observer) => {
    console.log('Observable starts')
    setTimeout(()=>{observer.next("1")}, 1000)
    setTimeout(()=>{observer.next("2")}, 2000)
    setTimeout(()=>{observer.error(new Error('something went wrong!'))}, 1000)
    setTimeout(()=>{observer.next("4")}, 4000)
    setTimeout(()=>{observer.next("5")}, 500)
    setTimeout(()=>{observer.complete()}, 1000)
  });

  myObservable1 = Observable.create((observer: any ) => {
    console.log('Observable with create starts')
    setTimeout(()=>{observer.next("A")}, 1000)
    setTimeout(()=>{observer.next("B")}, 2000)
    // setTimeout(()=>{observer.error(new Error('something went wrong!'))}, 1000)
    setTimeout(()=>{observer.next("c")}, 4000)
    setTimeout(()=>{observer.next("d")}, 500)
    setTimeout(()=>{observer.complete()}, 5000)
  });
  myObservable2 = of(this.array1);
  myObservable3 = from(this.array1);
  transform = this.myObservable3.pipe(map((val:any)=>{
    return val * 5;
  }))
   transform1 = this.transform.pipe(filter((val:any)=> {
    return val >= 45;
  }))
}
