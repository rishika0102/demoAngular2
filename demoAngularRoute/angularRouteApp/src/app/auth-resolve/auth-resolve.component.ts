import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-auth-resolve',
  templateUrl: './auth-resolve.component.html',
  styleUrls: ['./auth-resolve.component.css']
})
export class AuthResolveComponent implements OnInit {
   user: { id: string; name: string};
  editUserDetails: {id: string; name: string};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe(data =>{
      this.user = {
        id: data['user']['id'],
        name: data['user']['name'],
      };
      this.editUserDetails = {...this.user};
    })
  }
  editUser() {
    if(this.editUserDetails.id !== this.user.id || this.editUserDetails.name !== this.user.name){
      return true;
    } else {
      return false;
    }
  }
}
