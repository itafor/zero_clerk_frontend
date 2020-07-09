import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondResetComponent } from './respond-reset.component';

describe('RespondResetComponent', () => {
  let component: RespondResetComponent;
  let fixture: ComponentFixture<RespondResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
