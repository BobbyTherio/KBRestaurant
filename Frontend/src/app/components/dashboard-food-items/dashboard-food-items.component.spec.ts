import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFoodItemsComponent } from './dashboard-food-items.component';

describe('DashboardFoodItemsComponent', () => {
  let component: DashboardFoodItemsComponent;
  let fixture: ComponentFixture<DashboardFoodItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFoodItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFoodItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
