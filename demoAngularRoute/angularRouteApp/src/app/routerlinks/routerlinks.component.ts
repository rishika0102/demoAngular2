import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routerlinks',
  templateUrl: './routerlinks.component.html',
  styleUrls: ['./routerlinks.component.css']
})
export class RouterlinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLoadServers() {
    this.router.navigate(['/route']);
  }

}
