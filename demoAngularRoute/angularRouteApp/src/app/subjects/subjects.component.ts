import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  constructor(private notificationS: NotificationService) { }
  ngOnInit() {

  const subject = new Subject();

  subject.subscribe(d => console.log(d));
  subject.subscribe(d => console.log(d));

  subject.next(Math.random());

  const bsubject = new BehaviorSubject<number>(12)
  bsubject.subscribe(d => console.log('BehaviorSubject"', d));

}

 sendMessage(data: any) {
   console.log("sendMessagess", data.value);
   this.notificationS.sendNotification(data.value);
 }

}
