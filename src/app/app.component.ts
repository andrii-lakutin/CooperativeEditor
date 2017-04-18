import { Component, OnInit } from '@angular/core';

import { SocketService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  constructor(private socketService: SocketService) {
     this.title = 'COOPERATIVE EDITOR';
  }

  ngOnInit() {
    this.socketService.connect();
  }
}
