import { TestBed, inject } from '@angular/core/testing';

import { SocketService } from './socket.service';

describe('SocketService', () => {

  let socketService: SocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketService]
    });
    socketService = TestBed.get(SocketService);
  });

  it('should be defined', () => {
    expect(socketService).toBeDefined();
  });

  describe('#connect', () => {

    it('should be defined', () => {
      expect(socketService.connect).toBeDefined();
    });

    it('should create socket', () => {
      socketService.connect();
      expect(socketService.socket).toBeTruthy();
    });

  });
});
