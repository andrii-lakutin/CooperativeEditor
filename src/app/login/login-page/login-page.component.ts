import { Component, OnInit } from '@angular/core';

import { RouterService } from '../../shared';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private routerService: RouterService
  ) {}

  ngOnInit() {
  }

  onSubmit(nick, room) {
    this.routerService.navigateToRoom(room);
  }

}
