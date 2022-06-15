import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWinesComponent } from './dashboard-wines.component';

describe('DashboardWinesComponent', () => {
  let component: DashboardWinesComponent;
  let fixture: ComponentFixture<DashboardWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
