import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastsComponent } from './breakfasts.component';

describe('BreakfastsComponent', () => {
  let component: BreakfastsComponent;
  let fixture: ComponentFixture<BreakfastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
