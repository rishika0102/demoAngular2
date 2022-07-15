import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit{
  constructor(private notificationS: NotificationService) { }

  appStatus = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('users data received');
    }, 1000)
  })
  filteredString : string = '';
  user:any[] = [
    {firstname:'test', lastname: 'user', salary:1000000, Dob:new Date('05/10/1989')},
    {
      firstname:'test1', lastname: 'user1', salary:1000000, Dob:new Date('06/11/1999')
    },
    {
      firstname:'test2', lastname: 'user2', salary:1000000, Dob:new Date('10/10/1909')
    }
  ];
  notificationMessage: string;
  ngOnInit(): void {
    this.notificationS.notificationSubject.subscribe(d => {
        this.notificationMessage = d;
        console.log("notify",this.notificationMessage);
    })
  }
  onAddUser() {
    this.user.push({
      firstname: 'sample',
      Dob: new Date('12/09/1945')
    })
  }
}
