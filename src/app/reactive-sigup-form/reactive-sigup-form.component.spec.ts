import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSigupFormComponent } from './reactive-sigup-form.component';

describe('ReactiveSigupFormComponent', () => {
  let component: ReactiveSigupFormComponent;
  let fixture: ComponentFixture<ReactiveSigupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSigupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveSigupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
