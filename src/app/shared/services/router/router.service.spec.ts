import { TestBed, inject } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RouterService } from './router.service';

class activatedRouteStub {};
class routerStub {};

describe('RouterService', () => {

  let routerService: RouterService;
  let activatedRoute: ActivatedRoute;
  let router: Router;
  // beforeEach(() => {
  //   const activatedRoute = <ActivatedRoute>{};
  //   const router = <Router>{};
  //   routerService = new RouterService(activatedRoute, router);
  //   spyOn(routerService.router, 'navigate');
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
          routerService,
          { provide: activatedRoute, useClass: activatedRouteStub },
          { provide: router, useClass: routerStub }
        ]
    });

    routerService = TestBed.get(RouterService);
    activatedRoute = TestBed.get(ActivatedRoute);
    router = TestBed.get(Router);
  });

  it('should be defined', () => {
    expect(routerService).toBeDefined();
  });

  // describe('#navigateToRoom', () => {

  //   it('should be defined', () => {
  //     expect(routerService.navigateToRoom).toBeDefined();
  //   });

  //   it('should navigate to room that comes into it', () => {
  //     routerService.navigateToRoom('testRoom');
  //     expect(routerService.router.navigate).toHaveBeenCalledWith(['/rooms', 'testRoom']);
  //   });

  // });

});
