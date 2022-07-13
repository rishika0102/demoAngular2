import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'angularRouteApp';
 constructor(private dataService: DataService, private authService: AuthService){}
 Login() {
   this.authService.login();
 }
 Logout() {
   this.authService.logout();
 }
}
