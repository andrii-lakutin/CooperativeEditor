import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BEService {

  socket: any;
  user$: BehaviorSubject<any>;
  file$: BehaviorSubject<any>;
  output$: BehaviorSubject<any>;
  outputError$: BehaviorSubject<any>;

  constructor() {
    this.user$ = new BehaviorSubject({
      nick: null,
      room: null
    });
    this.file$ = new BehaviorSubject('');
    this.output$ = new BehaviorSubject('');
    this.outputError$ = new BehaviorSubject('');
  }

  connect() {
    this.socket = io(':3000');
    this.listenForNewcomers();
    this.listenForFileUpdates();
    this.listenForOutput();
  }

  listenForNewcomers () {
    this.socket.on('Someone has been joined to the room', (info) => {
      // TODO: Handle another newcomers
    });
  }

  listenForFileUpdates() {
    this.socket.on('Someone update file', (file) => {
      this.file$.next(file);
    });
  }

  listenForOutput() {
    this.socket.on('Script run finished', (output, error) => {
      error ? this.outputError$.next(error) : this.output$.next(output);
    });
  }

  updateFile(file, room) {
    this.socket.emit('File update', {file, room});
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

  leaveRoom() {
    this.socket.emit('User leave room');
  }

  fileSave (file, room) {
    this.socket.emit('File save', {file, room});
  }

  getEditorValue(room) {
    this.socket.emit('Request for editor value', room);
  }

  runScript(script, room) {
    this.socket.emit('Request for running script', script, room);
  }

}
