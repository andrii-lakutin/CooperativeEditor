import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import { RouterService, BEService, HelperService } from '../shared';

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

  constructor(
    public routerService: RouterService,
    public beService: BEService,
    public helperService: HelperService
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
  }

  ngAfterViewInit() {
    // Just preventing some console pollution from editor library
    this.editor.getEditor().$blockScrolling = Infinity;
    this.output.getEditor().$blockScrolling = Infinity;
  }

  sendMessage(msg) {
    // TODO: Investigate optimization!
    // this.helperService.findDiff(this.editor.getEditor().getValue(), this.editor.getEditor().getValue()+ '12121212');
  }

  onEditorChanges(newValue) {
    this.beService.updateFile(this.editor.getEditor().getValue(), this.userRoom);
  }

  ngOnDestroy() {
    this.beService.leaveRoom();
  }

}
