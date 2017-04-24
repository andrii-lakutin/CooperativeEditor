import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BEService {

  socket: any;
  user$: BehaviorSubject<any>;
  file$: BehaviorSubject<any>;

  constructor() {
    this.user$ = new BehaviorSubject({
      nick: null,
      room: null
    });
    this.file$ = new BehaviorSubject('');
  }

  connect() {
    this.socket = io(':3000');
    this.listenForNewcomers();
    this.listenForFileUpdates();
  }

  listenForNewcomers () {
    this.socket.on('Someone has been joined to the room', (info) => {
      // TODO: Handle another newcomers
    });
  }

  updateFile(file, room) {
    this.socket.emit('File update', {file, room});
  }

  listenForFileUpdates() {
    this.socket.on('Someone update file', (file) => {
      this.file$.next(file);
    });
  }

  joinRoom(info) {
    this.socket.emit('Request for joining room', info);
    this.logIn(info);
  }

  logIn(user) {
    this.user$.next(user);
  }

  isLogin() {
    return this.user$.getValue().nick;
  }

}