import { Component, OnInit } from '@angular/core';

import { BEService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  constructor(private beService: BEService) {
     this.title = 'COOPERATIVE EDITOR';
  }

  ngOnInit() {
    this.beService.connect();
  }
}
