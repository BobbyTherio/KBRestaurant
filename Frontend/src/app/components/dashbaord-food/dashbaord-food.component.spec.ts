import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordFoodComponent } from './dashbaord-food.component';

describe('DashbaordFoodComponent', () => {
  let component: DashbaordFoodComponent;
  let fixture: ComponentFixture<DashbaordFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaordFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaordFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
