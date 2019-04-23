import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoInfoPanelComponent } from './logo-info-panel.component';

describe('LogoInfoPanelComponent', () => {
  let component: LogoInfoPanelComponent;
  let fixture: ComponentFixture<LogoInfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoInfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoInfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
