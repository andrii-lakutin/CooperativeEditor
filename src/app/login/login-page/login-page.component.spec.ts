import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { RouterService, BEService } from '../../shared';

fdescribe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  let routerServiceMock, routerService,
      beServiceMock, beService;

  beforeEach(async(() => {
    routerServiceMock = {
      navigateToRoom: () => {}
    };

    beServiceMock = {
      logIn: () => {},
      joinRoom: () => {}
    };

    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent
      ],
      providers: [
        {provide: RouterService, useValue: routerServiceMock },
        {provide: BEService, useValue: beServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    routerService = fixture.debugElement.injector.get(RouterService);
    beService = fixture.debugElement.injector.get(BEService);
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('#joinRoom', () => {

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      spyOn(beServiceObj, 'logIn');
      spyOn(beServiceObj, 'joinRoom');
    });

    it('should be defined', () => {
      expect(component.joinRoom).toBeDefined();
    });

    it('should be defined', () => {
      const info = {
        nick: 'nickname',
        room: 'roomName'
      };
      component.joinRoom(info);
      expect(component.beService.logIn).toHaveBeenCalledWith(info);
      expect(component.beService.joinRoom).toHaveBeenCalledWith(info);
    });

  });

  describe('#onSubmit', () => {

    beforeEach(() => {
      const routerServiceObj = spyOn(component, 'routerService').and.callThrough();
      spyOn(routerServiceObj, 'navigateToRoom');
      spyOn(component, 'joinRoom');
    });

    it('should be defined', () => {
      expect(component.onSubmit).toBeDefined();
    });

    it('should do nothing if no name provided', () => {
      component.onSubmit(undefined, 'roomName');
      expect(component.routerService.navigateToRoom).not.toHaveBeenCalled();
    });

    it('should do nothing if no room provided', () => {
      component.onSubmit('name', undefined);
      expect(component.routerService.navigateToRoom).not.toHaveBeenCalled();
    });

    it('should do nothing if nothing provided', () => {
      component.onSubmit(undefined, undefined);
      expect(component.routerService.navigateToRoom).not.toHaveBeenCalled();
    });

    it('should call joinRoom func', () => {
      component.onSubmit('name', 'roomName');
      expect(component.joinRoom).toHaveBeenCalledWith({nick: 'name', room: 'roomName'});
    });

    it('should call router service with room name', () => {
      component.onSubmit('name', 'roomName');
      expect(component.routerService.navigateToRoom).toHaveBeenCalledWith('roomName');
    });

  });
});
