import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAppetizerComponent } from './dashboard-appetizer.component';

describe('DashboardAppetizerComponent', () => {
  let component: DashboardAppetizerComponent;
  let fixture: ComponentFixture<DashboardAppetizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAppetizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAppetizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
