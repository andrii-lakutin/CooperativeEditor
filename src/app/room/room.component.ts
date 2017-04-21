import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { RouterService } from '../shared';
import { BEService } from '../shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor;
  @ViewChild('output') output;
  text: string;
  userNickname: string;

  constructor(
    public routerService: RouterService,
    public beService: BEService
  ) {
    this.userNickname = '';
  }

  ngOnInit() {
    this.text = 'console.log();';
    this.beService.user$.subscribe(data => {
      if (!data.nick) {
        this.routerService.navigateToLogin();
      }
      this.userNickname = data.nick;
    });
  }

  ngAfterViewInit() {
    const value = this.editor.getEditor().getValue();
  }

  sendMessage(msg) {
    // console.log(this.socketService.getSocket());
  }

  onEditorChanges(newValue) {
    // console.log(newValue);
  }

}
