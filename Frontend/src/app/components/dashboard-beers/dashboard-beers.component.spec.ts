import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBeersComponent } from './dashboard-beers.component';

describe('DashboardBeersComponent', () => {
  let component: DashboardBeersComponent;
  let fixture: ComponentFixture<DashboardBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
