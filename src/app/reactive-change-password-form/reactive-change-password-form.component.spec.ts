import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveChangePasswordFormComponent } from './reactive-change-password-form.component';

describe('ReactiveChangePasswordFormComponent', () => {
  let component: ReactiveChangePasswordFormComponent;
  let fixture: ComponentFixture<ReactiveChangePasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveChangePasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
