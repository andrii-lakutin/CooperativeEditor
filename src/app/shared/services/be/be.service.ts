import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BEService {

  socket: any;
  user$: BehaviorSubject<any>;
  file$: BehaviorSubject<any>;
  output$: BehaviorSubject<any>;
  outputError$: BehaviorSubject<any>;
  chatMessages$: Observable<any>;

  public chatMessagesSubject = new Subject();

  constructor() {
    this.user$ = new BehaviorSubject({
      nick: null,
      room: null
    });
    this.file$ = new BehaviorSubject('');
    this.output$ = new BehaviorSubject('');
    this.outputError$ = new BehaviorSubject('');
    this.chatMessages$ = this.chatMessagesSubject.asObservable();
  }

  connect() {
    this.socket = io(`https://cooperative-editor.herokuapp.com/`);
    this.listenForNewcomers();
    this.listenForFileUpdates();
    this.listenForOutput();
    this.listenForChatMessages();
    this.listenForInitialChatMessages();
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

  listenForChatMessages() {
    this.socket.on('New chat message', (from, message) => {
      this.chatMessagesSubject.next({from, message});
    });
  }

  listenForInitialChatMessages() {
    this.socket.on('Initial chat messages', (messages) => {
      messages.forEach(message => {
        this.chatMessagesSubject.next(message);
      });
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

  sendMessage (message, from, room) {
    this.socket.emit('Send chat message', message, from, room);
  }

  getChatMessages(room) {
    this.socket.emit('Request for chat messages', room);
  }

}
