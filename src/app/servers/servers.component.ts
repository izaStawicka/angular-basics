import { Component } from '@angular/core';

@Component({
  selector: `.app-servers`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverAllowed = false;
  serverCreationStatus = 'No server was created';
  serverName='test name';
  serverWasCreated = false;
  servers = ['first', 'second'];

  constructor(){
    setTimeout(()=> {
      this.serverAllowed=true
    }, 2000)
  }

  serverCreated(){
    this.serverWasCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
  }

  serverNameChanged(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
