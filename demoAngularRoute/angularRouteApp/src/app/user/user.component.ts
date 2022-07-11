import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:  { id: string; name: string };
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
  }
  query() {
    this.router.navigate(['/user', 2, 'adan']),
      {queryParams:{page: 1, search: 'adan'}}
  }

}
