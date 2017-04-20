import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor;
  @ViewChild('output') output;
  text: string;

  constructor() { }

  ngOnInit() {
    this.text = 'console.log();';
  }

  ngAfterViewInit() {
    const value = this.editor.getEditor().getValue();
    console.log(value);
  }

  sendMessage(msg) {
    this.text = msg;
  }

  onEditorChanges(newValue) {
    console.log(newValue);
  }

}
