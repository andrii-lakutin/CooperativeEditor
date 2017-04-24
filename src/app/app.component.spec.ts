import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { BEService } from './shared';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let beServiceMock, beService;

  beforeEach(async(() => {
    beServiceMock = {
        connect: () => {}
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: BEService, useValue: beServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    beService = fixture.debugElement.injector.get(BEService);
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('~initialization', () => {
    it('should set title', (() => {
      expect(component.title).toEqual('COOPERATIVE EDITOR');
    }));

    it('should call BEService connect function', (() => {
      spyOn(component.beService, 'connect');
      component.ngOnInit();
      expect(component.beService.connect).toHaveBeenCalledWith();
    }));
  });
});
