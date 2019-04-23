import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrdersListComponent } from './active-orders-list.component';

describe('ActiveOrdersListComponent', () => {
  let component: ActiveOrdersListComponent;
  let fixture: ComponentFixture<ActiveOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
