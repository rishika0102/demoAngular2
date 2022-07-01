import {Component } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onPassEvent(event: any){
    console.log(event);
  }
}
