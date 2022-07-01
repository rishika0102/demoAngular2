import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngularApp2';
  userName = '';
  showSecret = false;
  log = [0];

   onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
   }
}
