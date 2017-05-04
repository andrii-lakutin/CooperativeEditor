import { Component, OnInit } from '@angular/core';

import { BEService } from '../../shared';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public beService: BEService) {}

  ngOnInit(): void {
  }

  public onSubmit(nickname: string, roomName: string): void {
    if (!roomName || !nickname) {
      return;
    }

    this.beService.logIn(nickname, roomName);  // TODO: Add some access rules.
  }

}
