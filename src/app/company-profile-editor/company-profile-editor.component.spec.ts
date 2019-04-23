import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEditorComponent } from './company-profile-editor.component';

describe('CompanyProfileEditorComponent', () => {
  let component: CompanyProfileEditorComponent;
  let fixture: ComponentFixture<CompanyProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
