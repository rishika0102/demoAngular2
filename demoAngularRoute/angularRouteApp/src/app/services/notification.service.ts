import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  public notificationSubject = new Subject<string>();
  constructor() { }

  sendNotification(data:any) {
    this.notificationSubject.next(data);
    console.log("notification",data);
  }
}
