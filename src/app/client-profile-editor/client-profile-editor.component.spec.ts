import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileEditorComponent } from './client-profile-editor.component';

describe('ClientProfileEditorComponent', () => {
  let component: ClientProfileEditorComponent;
  let fixture: ComponentFixture<ClientProfileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProfileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
