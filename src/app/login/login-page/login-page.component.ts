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

  ngOnInit(): void {
  }

  joinRoom(info: RoomInfo): void {
    this.beService.logIn(info);
    this.beService.joinRoom(info);
  }

  onSubmit(userNickname: string, roomName: string): void {
    if (!roomName || !userNickname) {
      return;
    }

    this.joinRoom({userNickname, roomName});  // TODO: Add some access rules.
    this.routerService.navigateToRoom(roomName);
  }

}
