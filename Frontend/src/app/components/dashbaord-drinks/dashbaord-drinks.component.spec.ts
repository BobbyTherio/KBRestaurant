import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordDrinksComponent } from './dashbaord-drinks.component';

describe('DashbaordDrinksComponent', () => {
  let component: DashbaordDrinksComponent;
  let fixture: ComponentFixture<DashbaordDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaordDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaordDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
