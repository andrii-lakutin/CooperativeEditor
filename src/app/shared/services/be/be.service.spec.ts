import { TestBed, inject } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BEService } from './be.service';
import { RouterService } from '../router/router.service';

import * as io from 'socket.io-client';

describe('BEService', () => {

  let beService: BEService;
  let routerServiceMock, routerService;

  beforeAll(() => {
    (window as any).io = (url) => {
      return {
        on: (string, cb) => {
          switch (string) {
            case 'Someone has been joined to the room':
              cb('Some user');
              break;
            case 'Someone update file':
              cb('File content');
              break;
            case 'Script run finished':
              cb('Output content', '');
              cb('', 'Error content');
              break;
            case 'New chat message':
              cb('From someone', 'Message content');
              break;
            case 'Initial chat messages':
              cb([{from: 'From someone', content: 'Message 1 content'}, {from: 'From another', content: 'Message 2 content'}]);
              break;
            default:
              return;
          }
        },
        emit: () => {}
      };
    };
  });

  beforeEach(() => {
    routerServiceMock = {
      navigateToRoom: () => {}
    };
    TestBed.configureTestingModule({
      providers: [BEService, {provide: RouterService, useValue: routerServiceMock }]
    });
    beService = TestBed.get(BEService);
    routerService = TestBed.get(RouterService);
  });

  it('should be defined', () => {
    expect(beService).toBeDefined();
  });

  it('~initialization', () => {
    expect(beService.user$).toEqual(new BehaviorSubject({
      nickname: '',
      roomName: ''
    }));

    expect(beService.file$).toEqual(new BehaviorSubject(''));
    expect(beService.output$).toEqual(new BehaviorSubject(''));
    expect(beService.chatMessages$).toEqual(beService.chatMessagesSubject.asObservable());
  });

  describe('#connect', () => {

    let listenForNewcomers,
        listenForFileUpdates,
        listenForOutput,
        listenForChatMessages,
        listenForInitialChatMessages;

    beforeEach(() => {
      listenForNewcomers = spyOn(beService, 'listenForNewcomers').and.callThrough();
      listenForFileUpdates = spyOn(beService, 'listenForFileUpdates').and.callThrough();
      listenForOutput = spyOn(beService, 'listenForOutput').and.callThrough();
      listenForChatMessages = spyOn(beService, 'listenForChatMessages').and.callThrough();
      listenForInitialChatMessages = spyOn(beService, 'listenForInitialChatMessages').and.callThrough();
    });

    it('should be defined', () => {
      expect(beService.connect).toBeDefined();
    });

    it('should create socket connection & init listeners', () => {
      beService.connect();
      expect(beService.socket).toBeTruthy();
      expect(listenForNewcomers).toHaveBeenCalledWith();
      expect(listenForFileUpdates).toHaveBeenCalledWith();
      expect(listenForOutput).toHaveBeenCalledWith();
      expect(listenForChatMessages).toHaveBeenCalledWith();
      expect(listenForInitialChatMessages).toHaveBeenCalledWith();
    });

  });

  describe('#listenForNewcomers', () => {

    it('should be defined', () => {
      const listenForNewcomers = spyOn(beService, 'listenForNewcomers').and.callThrough();
      expect(listenForNewcomers).toBeDefined();
    });

    it('should ...', () => {
      beService.connect();
    });

  });

  describe('#listenForFileUpdates', () => {

    beforeEach(() => {
      spyOn(beService.file$, 'next').and.callThrough();
    });

    it('should be defined', () => {
      const listenForFileUpdates = spyOn(beService, 'listenForFileUpdates').and.callThrough();
      expect(listenForFileUpdates).toBeDefined();
    });

    it('should push new value to file$ observable', () => {
      beService.connect();
      expect(beService.file$.next).toHaveBeenCalledWith('File content');
    });

  });

  describe('#listenForOutput', () => {

    beforeEach(() => {
      spyOn(beService.outputError$, 'next').and.callThrough();
      spyOn(beService.output$, 'next').and.callThrough();
    });

    it('should be defined', () => {
      const listenForOutput = spyOn(beService, 'listenForOutput').and.callThrough();
      expect(listenForOutput).toBeDefined();
    });

    it('should push new value to outbut$ observable', () => {
      beService.connect();
      expect(beService.output$.next).toHaveBeenCalledWith('Output content');
    });

    it('should push new value to outbutError$ observable', () => {
      beService.connect();
      expect(beService.outputError$.next).toHaveBeenCalledWith('Error content');
    });

  });

  describe('#listenForChatMessages', () => {

    let spy;

    beforeEach(() => {
      spy = spyOn(beService.chatMessagesSubject, 'next').and.callThrough();
    });

    it('should be defined', () => {
      const listenForChatMessages = spyOn(beService, 'listenForChatMessages').and.callThrough();
      expect(listenForChatMessages).toBeDefined();
    });

    it('should push new value to file$ observable', () => {
      beService.connect();
      expect(spy.calls.argsFor(0)).toEqual([{from: 'From someone', content: 'Message content'}]);
    });

  });

  describe('#listenForInitialChatMessages', () => {

    let spy;

    beforeEach(() => {
      spy = spyOn(beService.chatMessagesSubject, 'next').and.callThrough();
    });

    it('should be defined', () => {
      const listenForInitialChatMessages = spyOn(beService, 'listenForInitialChatMessages').and.callThrough();
      expect(listenForInitialChatMessages).toBeDefined();
    });

    it('should push new value to file$ observable', () => {
      beService.connect();
      expect(spy.calls.argsFor(0)).toEqual([{from: 'From someone', content: 'Message content'}]);
      expect(spy.calls.argsFor(1)).toEqual([{from: 'From someone', content: 'Message 1 content'}]);
      expect(spy.calls.argsFor(2)).toEqual([{from: 'From another', content: 'Message 2 content'}]);
      expect(spy.calls.count()).toEqual(3);
    });

  });

  describe('#updateFile', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
    });

    it('should be defined', () => {
      expect(beService.updateFile).toBeDefined();
    });

    it('should emit socket update file', () => {
      beService.updateFile('file', 'room');
      expect(beService.socket.emit).toHaveBeenCalledWith('File update', {file: 'file', room: 'room'});
    });

  });

  describe('#joinRoom', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
      spyOn(routerService, 'navigateToRoom');
    });

    it('should be defined', () => {
      expect(beService.joinRoom).toBeDefined();
    });

    it('should emit socket join room & call logIn', () => {
      beService.joinRoom('nick', 'room');
      expect(beService.socket.emit).toHaveBeenCalledWith('Request for joining room', {nickname: 'nick', roomName: 'room'});
      expect(routerService.navigateToRoom).toHaveBeenCalledWith('room');
    });

  });

  describe('#logIn', () => {

    beforeEach(() => {
      spyOn(beService.user$, 'next');
      spyOn(beService, 'joinRoom');
    });

    it('should be defined', () => {
      expect(beService.logIn).toBeDefined();
    });

    it('should push next value to user$ observable', () => {
      beService.logIn('nick', 'room');
      expect(beService.user$.next).toHaveBeenCalledWith({nickname: 'nick', roomName: 'room'});
      expect(beService.joinRoom).toHaveBeenCalledWith('nick', 'room');
    });

  });

  describe('#isLogin', () => {

    it('should be defined', () => {
      expect(beService.isLogin).toBeDefined();
    });

    it('should return string with nickname', () => {
      beService.user$.next({nickname: 'nick', roomName: '1'});
      beService.isLogin();
      expect(beService.isLogin()).toEqual('nick');
    });

  });

  describe('#logOut', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
      spyOn(beService.user$, 'next');
    });

    it('should be defined', () => {
      expect(beService.logOut).toBeDefined();
    });

    it('should emit socket leave room', () => {
      beService.logOut();
      expect(beService.socket.emit).toHaveBeenCalledWith('User leave room');
      expect(beService.user$.next).toHaveBeenCalledWith({nickname: '', roomName: ''});
    });

  });

  describe('#fileSave', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
    });

    it('should be defined', () => {
      expect(beService.fileSave).toBeDefined();
    });

    it('should emit socket file save', () => {
      beService.fileSave('file', 'room');
      expect(beService.socket.emit).toHaveBeenCalledWith('File save', {file: 'file', room: 'room'});
    });

  });

  describe('#getEditorValue', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
    });

    it('should be defined', () => {
      expect(beService.getEditorValue).toBeDefined();
    });

    it('should emit socket get editor value', () => {
      beService.getEditorValue('room');
      expect(beService.socket.emit).toHaveBeenCalledWith('Request for editor value', 'room');
    });

  });

  describe('#runScript', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
    });

    it('should be defined', () => {
      expect(beService.runScript).toBeDefined();
    });

    it('should emit socket run script', () => {
      beService.runScript('console.log(1);', 'room');
      expect(beService.socket.emit).toHaveBeenCalledWith('Request for running script', 'console.log(1);', 'room');
    });

  });

  describe('#sendMessage', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
    });

    it('should be defined', () => {
      expect(beService.sendMessage).toBeDefined();
    });

    it('should emit socket send message', () => {
      beService.sendMessage('hello', 'user', 'room');
      expect(beService.socket.emit).toHaveBeenCalledWith('Send chat message', 'hello', 'user', 'room');
    });

  });

  describe('#getChatMessages', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
    });

    it('should be defined', () => {
      expect(beService.getChatMessages).toBeDefined();
    });

    it('should emit socket send message', () => {
      beService.getChatMessages('room');
      expect(beService.socket.emit).toHaveBeenCalledWith('Request for chat messages', 'room');
    });

  });

});
