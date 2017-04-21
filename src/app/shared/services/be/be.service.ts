import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BEService {

  socket: any;
  user$: BehaviorSubject<any>;

  constructor() {
    this.user$ = new BehaviorSubject({
      nick: null,
      room: null
    });
  }

  connect() {
    this.socket = io(':3000');
    this.listenForNewcomers();
  }

  listenForNewcomers () {
    this.socket.on('Someone has been joined to the room', (info) => {
      this.onLogIn(info);
    });
  }

  getSocket() {
    return this.socket;
  }

  joinRoom(info) {
    this.socket.emit('Request for joining room', info);
  }

  onLogIn(user) {
    this.user$.next(user);
  }

  isLogin() {
    return this.user$.getValue().nick;
  }

}
