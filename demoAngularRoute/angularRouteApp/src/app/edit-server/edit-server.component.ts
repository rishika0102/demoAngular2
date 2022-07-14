import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit{
  constructor(private notificationS: NotificationService) { }
  notificationMessage: string;
  ngOnInit(): void {
    this.notificationS.notificationSubject.subscribe(d => {
        this.notificationMessage = d;
        console.log("notify",this.notificationMessage);
    })
  }
}
