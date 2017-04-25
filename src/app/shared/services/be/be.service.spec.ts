import { TestBed, inject } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BEService } from './be.service';

describe('BEService', () => {

  let beService: BEService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BEService]
    });
    beService = TestBed.get(BEService);
  });

  it('should be defined', () => {
    expect(beService).toBeDefined();
  });

  it('~initialization', () => {
    expect(beService.user$).toEqual(new BehaviorSubject({
      nick: null,
      room: null
    }));

    expect(beService.file$).toEqual(new BehaviorSubject(''));
  });

  describe('#connect', () => {

    beforeEach(() => {
      spyOn(beService, 'listenForNewcomers');
      spyOn(beService, 'listenForFileUpdates');
    });

    it('should be defined', () => {
      expect(beService.connect).toBeDefined();
    });

    it('should create socket', () => {
      beService.connect();
      expect(beService.socket).toBeTruthy();
      expect(beService.listenForNewcomers).toHaveBeenCalledWith();
      expect(beService.listenForFileUpdates).toHaveBeenCalledWith();
    });

  });

  describe('#listenForNewcomers', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'on');
    });

    it('should be defined', () => {
      expect(beService.listenForNewcomers).toBeDefined();
    });

    it('should create socket', () => {
      beService.listenForNewcomers();
      expect(beService.socket.on).toHaveBeenCalledWith('Someone has been joined to the room', jasmine.any(Function));
    });

  });

  describe('#listenForFileUpdates', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'on').and.callFake((eventString, cb) => {
        cb('Server response');
      });
      spyOn(beService.file$, 'next').and.callThrough();
    });

    it('should be defined', () => {
      expect(beService.listenForFileUpdates).toBeDefined();
    });

    it('should create socket', () => {
      beService.listenForFileUpdates();
      expect(beService.socket.on).toHaveBeenCalledWith('Someone update file', jasmine.any(Function));
      expect(beService.file$.next).toHaveBeenCalledWith('Server response');
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

    it('should create socket', () => {
      beService.updateFile('file', 'room');
      expect(beService.socket.emit).toHaveBeenCalledWith('File update', {file: 'file', room: 'room'});
    });

  });

  describe('#joinRoom', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
      spyOn(beService, 'logIn');
    });

    it('should be defined', () => {
      expect(beService.joinRoom).toBeDefined();
    });

    it('should create socket', () => {
      beService.joinRoom({nick: 'nick', room: 'room'});
      expect(beService.socket.emit).toHaveBeenCalledWith('Request for joining room', {nick: 'nick', room: 'room'});
      expect(beService.logIn).toHaveBeenCalledWith({nick: 'nick', room: 'room'});
    });

  });

  describe('#logIn', () => {

    beforeEach(() => {
      spyOn(beService.user$, 'next');
    });

    it('should be defined', () => {
      expect(beService.logIn).toBeDefined();
    });

    it('should create socket', () => {
      beService.logIn({nick: 'nick', room: 'room'});
      expect(beService.user$.next).toHaveBeenCalledWith({nick: 'nick', room: 'room'});
    });

  });

  describe('#isLogin', () => {

    it('should be defined', () => {
      expect(beService.isLogin).toBeDefined();
    });

    it('should create socket', () => {
      beService.user$.next({nick: 'nick', room: '1'});
      beService.isLogin();
      expect(beService.isLogin()).toEqual('nick');
    });

  });

  describe('#leaveRoom', () => {

    beforeEach(() => {
      beService.connect();
      const socket = spyOn(beService, 'socket').and.callThrough();
      spyOn(socket, 'emit');
    });

    it('should be defined', () => {
      expect(beService.leaveRoom).toBeDefined();
    });

    it('should create socket', () => {
      beService.leaveRoom();
      expect(beService.socket.emit).toHaveBeenCalledWith('User leave room');
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

    it('should create socket', () => {
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

    it('should create socket', () => {
      beService.getEditorValue('room');
      expect(beService.socket.emit).toHaveBeenCalledWith('Request for editor value', 'room');
    });

  });

});
