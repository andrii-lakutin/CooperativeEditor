import { TestBed, inject } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RouterService } from './router.service';

describe('RouterService', () => {

  let routerService: RouterService;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  const activatedRouteStub = {};
  const routerStub = {
    navigate: () => {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
          RouterService,
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: Router, useValue: routerStub }
        ]
    });

    routerService = TestBed.get(RouterService);
    activatedRoute = TestBed.get(ActivatedRoute);
    router = TestBed.get(Router);
  });

  it('should be defined', () => {
    expect(routerService).toBeDefined();
  });

  describe('#navigateToRoom', () => {

    beforeEach(() => {
      spyOn(routerService.router, 'navigate');
    });

    it('should be defined', () => {
      expect(routerService.navigateToRoom).toBeDefined();
    });

    it('should navigate to room that comes into it', () => {
      routerService.navigateToRoom('testRoom');
      expect(routerService.router.navigate).toHaveBeenCalledWith(['/rooms', 'testRoom']);
    });

  });

});
