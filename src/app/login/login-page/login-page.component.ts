import { Component, OnInit } from '@angular/core';

import { RouterService } from '../../shared';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public routerService: RouterService
  ) {}

  ngOnInit() {
  }

  onSubmit(nick: string, room: string) {
    if (!room || !nick) {
      return;
    }

    this.routerService.navigateToRoom(room);
  }

}
