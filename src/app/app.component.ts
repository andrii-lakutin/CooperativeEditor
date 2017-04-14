import { Component, OnInit } from '@angular/core';

import { SocketService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: any;

  constructor(private socketService: SocketService) {
     this.title = 'app works!';
  }

  ngOnInit() {
    this.socketService.connect();
  }
}
