import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBreakfastsComponent } from './dashboard-breakfasts.component';

describe('DashboardBreakfastsComponent', () => {
  let component: DashboardBreakfastsComponent;
  let fixture: ComponentFixture<DashboardBreakfastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBreakfastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBreakfastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
