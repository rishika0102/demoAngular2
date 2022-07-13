import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from '../deactivate.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})
export class DeactivateComponent implements OnInit, IDeactivateGuard{
  user: { id: string; name: string};
  editUserDetails: {id: string; name: string};
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.user = {
        id: data['id'],
        name: data['name'],
      };
      this.editUserDetails = {...this.user};
    })
  }
  canExit() {
    if(confirm('Are you sure to exit?')){
      return true;
    }
    return false;
  }

}

