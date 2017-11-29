import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hb-auth',
  templateUrl: './auth.component.html',
})

export class AuthComponent implements OnInit  {

  constructor(private router: Router) {}
// redirect to login
  ngOnInit() {
    this.router.navigate(['/login']);
  }
}
