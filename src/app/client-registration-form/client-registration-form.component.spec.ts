import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationFormComponent } from './client-registration-form.component';

describe('ClientRegistrationFormComponent', () => {
  let component: ClientRegistrationFormComponent;
  let fixture: ComponentFixture<ClientRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
