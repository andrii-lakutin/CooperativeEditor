import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RoomComponent } from './room.component';
import { RouterService, BEService } from '../shared';

import { Observable, BehaviorSubject } from 'rxjs/Rx';

describe('RoomComponent', () => {
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
      runScript: () => {},
      user$: new BehaviorSubject({nick: '', room: ''}),
      file$: new BehaviorSubject(''),
      output$: new BehaviorSubject(''),
      outputError$: new BehaviorSubject(''),
      changeUserSubject: function (param) {
        this.user$.next(param);
      },
      changeFileSubject: function (param) {
        this.file$.next(param);
      },
      changeOutputSubject: function (param) {
        this.output$.next(param);
      },
      changeOutputErrorSubject: function (param) {
        this.outputError$.next(param);
      },
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
          commands: {
            addCommand: (a) => { a.exec(); }
          },
          getValue: () => 'editorValue',
          setValue: (newValue, params) => { return {newValue, params}; }
        };
      }
    };
    component.output = {
      getEditor: () => {
        return {
          $blockScrolling: Infinity,
          getValue: () => 'outputValue',
          setValue: (newValue, params) => { return {newValue, params}; }
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

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      const routerServiceObj = spyOn(component, 'routerService').and.callThrough();
      spyOn(component.editor.getEditor(), 'getValue');
      spyOn(component.editor.getEditor(), 'setValue');
      spyOn(routerServiceObj, 'navigateToLogin');
      spyOn(beServiceObj, 'fileSave');

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
      expect(component.editor.getEditor().setValue('newValue', 1)).toEqual({newValue: 'newValue', params: 1});
    });

    it('should set text value when new data comes from output$ observable', () => {
      component.ngOnInit();
      expect(component.output.getEditor().setValue('newValue', 1)).toEqual({newValue: 'newValue', params: 1});
    });

    it('should set text value when new data comes from outputError$ observable', () => {
      component.ngOnInit();
      expect(component.output.getEditor().setValue('newError', -1)).toEqual({newValue: 'newError', params: -1});
    });

    it('should set text value when new data comes from file$ observable', () => {
      const fileSaveSpy = spyOn(component, 'saveFile');
      component.ngOnInit();
      jasmine.clock().tick(5001);
      expect(component.saveFile).toHaveBeenCalledWith();
      jasmine.clock().tick(5001);
      expect(fileSaveSpy.calls.count()).toEqual(2);
    });

  });

  describe('#ngAfterViewInit', () => {

    it('should be defined', () => {
      expect(component.ngAfterViewInit).toBeDefined();
    });

    it('should init custom commands', () => {
      spyOn(component, 'initCustomCommands');
      component.ngAfterViewInit();
      expect(component.initCustomCommands).toHaveBeenCalledWith();
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

  describe('#initCustomCommands', () => {

    beforeEach(() => {
      spyOn(component, 'saveFile');
      spyOn(component, 'runScript');
    });

    it('should be defined', () => {
      expect(component.initCustomCommands).toBeDefined();
    });

    it('should set output value to "" if no editor value', () => {
      component.editor = {
        getEditor: () => {
          return {
            $blockScrolling: Infinity,
            commands: {
              addCommand: (a) => { a.exec(); }
            },
            getValue: () => '',
            setValue: (newValue, params) => { return {newValue, params}; }
          };
        }
      };
      component.initCustomCommands();
      expect(component.output.getEditor().setValue('')).toEqual({newValue: '', params: undefined});
      expect(component.saveFile).toHaveBeenCalledWith();
      expect(component.runScript).toHaveBeenCalledWith();
    });

    it('should add ctrl+s combination', () => {
      component.initCustomCommands();
      expect(component.saveFile).toHaveBeenCalledWith();
      expect(component.runScript).toHaveBeenCalledWith();
    });

  });

  describe('#runScript', () => {

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      spyOn(beServiceObj, 'runScript');
      beService.changeUserSubject({nick: 'someNick', room: 'someRoom'});
      fixture.detectChanges();
    });

    it('should be defined', () => {
      expect(component.runScript).toBeDefined();
    });

    it('should call beService runScript method', () => {
      component.runScript();
      expect(component.beService.runScript).toHaveBeenCalledWith('editorValue', 'someRoom');
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

  describe('#ngOnDestroy', () => {

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      spyOn(beServiceObj, 'leaveRoom');
      spyOn(window, 'clearInterval');
    });

    it('should be defined', () => {
      expect(component.ngOnDestroy).toBeDefined();
    });

    it('should call beService updateFile with editor value & roomName', () => {
      component.ngOnDestroy();
      expect(component.beService.leaveRoom).toHaveBeenCalledWith();
    });

    it('should call beService updateFile with editor value & roomName', () => {
      component.ngOnDestroy();
      expect(window.clearInterval).toHaveBeenCalledWith(component.saver);
    });

  });

  describe('#saveFile', () => {

    beforeEach(() => {
      const beServiceObj = spyOn(component, 'beService').and.callThrough();
      spyOn(beServiceObj, 'fileSave');
      beService.changeUserSubject({nick: 'someNick', room: 'someRoom'});
      fixture.detectChanges();
    });

    it('should be defined', () => {
      expect(component.saveFile).toBeDefined();
    });

    it('should call beService updateFile with editor value & roomName', () => {
      component.saveFile();
      expect(component.beService.fileSave).toHaveBeenCalledWith('editorValue', 'someRoom');
    });

  });
});
