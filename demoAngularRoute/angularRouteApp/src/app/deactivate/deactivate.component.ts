import { Component, OnInit } from '@angular/core';
import { IDeactivateGuard } from '../services/deactivate.service';
@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})
export class DeactivateComponent implements OnInit, IDeactivateGuard {

  ngOnInit(): void {
   console.log("ngOnInit called")
  }

  canExit() {
    if(confirm('Are you sure to exit?')) {
      return true;
    }
    return false;
  }

}

