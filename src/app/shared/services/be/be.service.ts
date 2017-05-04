import { Injectable } from '@angular/core';
import * as ioType from 'socket.io-client';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { RouterService } from '../router/router.service';

declare const io: ioType;

@Injectable()
export class BEService {

  public socket: ioType;
  public user$: BehaviorSubject<User>;
  public file$: BehaviorSubject<string>;
  public output$: BehaviorSubject<string>;
  public outputError$: BehaviorSubject<string>;
  public chatMessages$: Observable<Message>;
  public chatMessagesSubject = new Subject();

  constructor(public routerService: RouterService) {
    this.user$ = new BehaviorSubject({
      nickname: '',
      roomName: ''
    });
    this.file$ = new BehaviorSubject('');
    this.output$ = new BehaviorSubject('');
    this.outputError$ = new BehaviorSubject('');
    this.chatMessages$ = this.chatMessagesSubject.asObservable();
  }

  public connect(): void {
    this.socket = io(`:3000`);
    this.listenForNewcomers();
    this.listenForFileUpdates();
    this.listenForOutput();
    this.listenForChatMessages();
    this.listenForInitialChatMessages();
  }

  private listenForNewcomers(): void {
    this.socket.on('Someone has been joined to the room', (user: User) => {
      // TODO: Handle another newcomers
    });
  }

  private listenForFileUpdates(): void {
    this.socket.on('Someone update file', (file: string) => {
      this.file$.next(file);
    });
  }

  private listenForOutput(): void {
    this.socket.on('Script run finished', (output: string, error: string) => {
      error ? this.outputError$.next(error) : this.output$.next(output);
    });
  }

  private listenForChatMessages(): void {
    this.socket.on('New chat message', (from: string, message: string) => {
      this.chatMessagesSubject.next({from, content: message});
    });
  }

  private listenForInitialChatMessages(): void {
    this.socket.on('Initial chat messages', (messages: Array<Message>) => {
      messages.forEach((message: Message) => {
        this.chatMessagesSubject.next(message);
      });
    });
  }

  public updateFile(file: string, room: string): void {
    this.socket.emit('File update', {file, room});
  }

  public joinRoom(nickname: string, roomName: string): void {
    this.socket.emit('Request for joining room', {nickname, roomName});
    this.routerService.navigateToRoom(roomName);
  }

  public logIn(nickname: string, roomName: string): void {
    this.user$.next({nickname, roomName});
    this.joinRoom(nickname, roomName);
  }

  public logOut(): void {
    this.socket.emit('User leave room');
    this.user$.next({nickname: '', roomName: ''});
  }

  public isLogin(): string {
    return this.user$.getValue().nickname;
  }

  public fileSave (file: string, room: string): void {
    this.socket.emit('File save', {file, room});
  }

  public getEditorValue(room: string): void {
    this.socket.emit('Request for editor value', room);
  }

  public runScript(script: string, room: string): void {
    this.socket.emit('Request for running script', script, room);
  }

  public sendMessage (message: string, from: string, room: string): void {
    this.socket.emit('Send chat message', message, from, room);
  }

  public getChatMessages(room: string): void {
    this.socket.emit('Request for chat messages', room);
  }

}
