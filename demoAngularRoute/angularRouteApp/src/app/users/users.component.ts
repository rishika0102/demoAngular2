import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
    showRoute(){
    console.log("routechild");
    // this.router.navigate(['routechild']);
  }
  showRouting(){
    console.log("routingchild");
     // this.router.navigate(['routingchild']);
  }

}
