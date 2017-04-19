import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { RouterService } from '../../shared';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  let routerServiceMock, routerService;

  beforeEach(async(() => {

    routerServiceMock = {
      navigateToRoom: () => {}
    };

    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent
      ],
      providers: [
        {provide: RouterService, useValue: routerServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    routerService = fixture.debugElement.injector.get(RouterService);
    fixture.detectChanges();

    var privateTest = spyOn(component, 'routerService').and.callThrough();
    spyOn(privateTest, 'navigateToRoom');
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('#onSubmit', () => {

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

    it('should call router service with room name', () => {
      component.onSubmit('name', 'roomName');
      expect(component.routerService.navigateToRoom).toHaveBeenCalledWith('roomName');
    });

  });
});
