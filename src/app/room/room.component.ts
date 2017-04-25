import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';

import { RouterService, BEService } from '../shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('editor') editor;
  @ViewChild('output') output;
  text: string;
  userNickname: string;
  userRoom: string;
  saver: any;

  constructor(
    public routerService: RouterService,
    public beService: BEService
  ) {
    this.userNickname = '';
    this.userRoom = '';
  }

  ngOnInit() {
    this.beService.user$.subscribe(data => {
      if (!data.nick) {
        this.routerService.navigateToLogin();
      }
      this.userNickname = data.nick;
      this.userRoom = data.room;
    });

    this.beService.file$.subscribe(file => {
      this.text = file;
    });

    this.saver = setInterval(() => {
      this.beService.fileSave(this.editor.getEditor().getValue(), this.userRoom);
      console.log('File saved');
    }, 5000);

    this.beService.getEditorValue(this.userRoom);
  }

  ngAfterViewInit() {
    // Just preventing some console pollution from editor library
    this.editor.getEditor().$blockScrolling = Infinity;
    this.output.getEditor().$blockScrolling = Infinity;
  }

  sendMessage(msg) {
    console.log(msg);
  }

  onEditorChanges() {
    this.beService.updateFile(this.editor.getEditor().getValue(), this.userRoom);
  }

  ngOnDestroy() {
    this.beService.leaveRoom();
    clearInterval(this.saver);
  }

}
