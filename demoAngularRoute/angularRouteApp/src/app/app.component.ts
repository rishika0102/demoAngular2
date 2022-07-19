import { Component, Output } from '@angular/core';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  test1: boolean = true;
  testNext1: boolean = true;
  title = 'angularRouteApp';

  constructor(private dataService: DataService,
    private authService: AuthService){}

  login(email: any, psd: any) {
    if(email.value && psd.value) {
      this.authService.login(email.value, psd.value);
    }
    else {
      alert("fill the required fields");
    }
  }

}
