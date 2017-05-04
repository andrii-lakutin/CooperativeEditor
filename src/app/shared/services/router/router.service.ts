import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  public navigateToRoom (room: string) {
     this.router.navigate(['/rooms', room]);
  }

  public navigateToLogin() {
    this.router.navigate(['/']);
  }
}
