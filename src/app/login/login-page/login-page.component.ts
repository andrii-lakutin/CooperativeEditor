import { Component, OnInit } from '@angular/core';

import { RouterService } from '../../shared';
import { BEService } from '../../shared';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public routerService: RouterService,
    public beService: BEService
  ) {}

  ngOnInit() {
  }

  joinRoom(info) {
    this.beService.logIn(info);
    this.beService.joinRoom(info);
  }

  onSubmit(nick: string, room: string) {
    if (!room || !nick) {
      return;
    }

    this.joinRoom({nick, room});  // TODO: Add some access rules.
    this.routerService.navigateToRoom(room);
  }

}
