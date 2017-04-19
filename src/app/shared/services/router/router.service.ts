import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  navigateToRoom (room) {
     this.router.navigate(['/rooms', room]);
  }
}
