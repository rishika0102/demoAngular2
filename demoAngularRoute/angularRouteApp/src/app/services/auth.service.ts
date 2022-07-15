import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn = false;

  login(email:any, psd:any) {
    console.log("email....",email);
    console.log("psd...", psd);
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  isAuthenticated(){
    return this.isLoggedIn;
  }
}
