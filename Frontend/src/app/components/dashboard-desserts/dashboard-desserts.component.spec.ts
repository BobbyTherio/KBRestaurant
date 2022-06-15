import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDessertsComponent } from './dashboard-desserts.component';

describe('DashboardDessertsComponent', () => {
  let component: DashboardDessertsComponent;
  let fixture: ComponentFixture<DashboardDessertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDessertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
