import { TestBed, inject } from '@angular/core/testing';

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

  describe('#connect', () => {

    it('should be defined', () => {
      expect(beService.connect).toBeDefined();
    });

    it('should create socket', () => {
      beService.connect();
      expect(beService.socket).toBeTruthy();
    });

  });
});
