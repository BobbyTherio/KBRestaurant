import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainsComponent } from './dashboard-mains.component';

describe('DashboardMainsComponent', () => {
  let component: DashboardMainsComponent;
  let fixture: ComponentFixture<DashboardMainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
