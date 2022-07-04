import {Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log(this.serverStatus);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
  }
  onCreateServers() {
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onPassEvent(event: any){
    console.log(event);
  }
  onAddServer(servername: any) {
    console.log("servername",servername);
  }
  getColor() {
  return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
