import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { RouterService, BEService } from '../../shared';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  let beServiceMock, beService;

  beforeEach(async(() => {

    beServiceMock = {
      logIn: () => {}
    };

    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent
      ],
      providers: [
        {provide: BEService, useValue: beServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    beService = fixture.debugElement.injector.get(BEService);
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  describe('#onSubmit', () => {

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      spyOn(beServiceObj, 'logIn');
    });

    it('should be defined', () => {
      expect(component.onSubmit).toBeDefined();
    });

    it('should do nothing if no name provided', () => {
      component.onSubmit(undefined, 'roomName');
      expect(component.beService.logIn).not.toHaveBeenCalled();
    });

    it('should do nothing if no room provided', () => {
      component.onSubmit('name', undefined);
      expect(component.beService.logIn).not.toHaveBeenCalled();
    });

    it('should do nothing if nothing provided', () => {
      component.onSubmit(undefined, undefined);
      expect(component.beService.logIn).not.toHaveBeenCalled();
    });

    it('should call router service with room name', () => {
      component.onSubmit('name', 'roomName');
      expect(component.beService.logIn).toHaveBeenCalledWith('name', 'roomName');
    });

  });
});
