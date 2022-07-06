import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()

export class ParentService {
  users = [
    {name: 'jhon', status: 'active'},
    {name: 'Mark', status: 'inactive'}
  ]

  constructor(private Logger: LoggerService) { }
  parentServices() {
    console.log("Hello this is parent of all components and inject this service into any service");
  }
  AddNewUser(name: string, Status: string){
    this.users.push({name: name, status: status});
    this.Logger.LogMessage(name, status)
    console.log("logger",this.Logger.LogMessage(name, status));
  }


}
