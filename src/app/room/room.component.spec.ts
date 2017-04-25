import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RoomComponent } from './room.component';
import { RouterService, BEService } from '../shared';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

fdescribe('RoomComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;

  let routerServiceMock, routerService,
      beServiceMock, beService;

  beforeEach(async(() => {
    routerServiceMock = {
      navigateToLogin: () => {}
    };

    beServiceMock = {
      fileSave: () => {},
      getEditorValue: () => {},
      updateFile: () => {},
      leaveRoom: () => {},
      user$: new BehaviorSubject({nick: '', room: ''}),
      file$: new BehaviorSubject(''),
      changeUserSubject: function (param) {
        this.user$.next(param);
      },
      changeFileSubject: function (param) {
        this.file$.next(param);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ RoomComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: RouterService, useValue: routerServiceMock },
        {provide: BEService, useValue: beServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    component.editor = {
      getEditor: () => {
        return {
          $blockScrolling: Infinity,
          getValue: () => 'editorValue'
        };
      }
    };
    component.output = {
      getEditor: () => {
        return {
          $blockScrolling: Infinity,
          getValue: () => 'outputValue'
        };
      }
    };
    routerService = fixture.debugElement.injector.get(RouterService);
    beService = fixture.debugElement.injector.get(BEService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('~initialization', () => {
    expect(component.userNickname).toEqual('');
    expect(component.userRoom).toEqual('');
  });

  describe('#ngOnInit', () => {

    let fileSaveSpy;

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      const routerServiceObj = spyOn(component, 'routerService').and.callThrough();
      spyOn(component.editor.getEditor(), 'getValue');
      spyOn(routerServiceObj, 'navigateToLogin');
      fileSaveSpy = spyOn(beServiceObj, 'fileSave');

      beService.changeUserSubject({nick: 'someNick', room: 'someRoom'});
      beService.changeFileSubject('someText');
      jasmine.clock().install();
      fixture.detectChanges();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('should be defined', () => {
      expect(component.ngOnInit).toBeDefined();
    });

    it('should navigate to login page if no user', () => {
      beService.changeUserSubject({nick: '', room: 'someRoom'});
      fixture.detectChanges();
      component.ngOnInit();
      expect(component.routerService.navigateToLogin).toHaveBeenCalledWith();
    });

    it('should set userNickname & userRoom when new data comes from user$ observable', () => {
      component.ngOnInit();
      expect(component.userNickname).toEqual('someNick');
      expect(component.userRoom).toEqual('someRoom');
    });

    it('should set text value when new data comes from file$ observable', () => {
      component.ngOnInit();
      expect(component.text).toEqual('someText');
    });

    it('should set text value when new data comes from file$ observable', () => {
      component.ngOnInit();
      jasmine.clock().tick(5001);
      expect(component.editor.getEditor().getValue()).toEqual('editorValue');
      expect(component.beService.fileSave).toHaveBeenCalledWith('editorValue', 'someRoom');
      jasmine.clock().tick(5001);
      expect(fileSaveSpy.calls.count()).toEqual(2);
    });

  });

  describe('#ngAfterViewInit', () => {

    it('should be defined', () => {
      expect(component.ngAfterViewInit).toBeDefined();
    });

    it('should set $blockScrolling to Infinity to block console pollution from library', () => {
      component.ngAfterViewInit();
      expect(component.editor.getEditor().$blockScrolling).toEqual(Infinity);
      expect(component.output.getEditor().$blockScrolling).toEqual(Infinity);
    });

  });

  describe('#sendMessage', () => {

    it('should be defined', () => {
      expect(component.sendMessage).toBeDefined();
    });

    it('should ...', () => {
      component.sendMessage('someMsg');
    });

  });

  describe('#onEditorChanges', () => {

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      spyOn(beServiceObj, 'updateFile');
      beService.changeUserSubject({nick: 'someNick', room: 'someRoom'});
      fixture.detectChanges();
    });

    it('should be defined', () => {
      expect(component.onEditorChanges).toBeDefined();
    });

    it('should call beService updateFile with editor value & roomName', () => {
      component.onEditorChanges();
      expect(component.beService.updateFile).toHaveBeenCalledWith('editorValue', 'someRoom');
    });

  });
});
