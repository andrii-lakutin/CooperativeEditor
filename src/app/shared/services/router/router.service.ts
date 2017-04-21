import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  navigateToRoom (room) {
     this.router.navigate(['/rooms', room]);
  }

  navigateToLogin() {
    this.router.navigate(['/']);
  }
}
