import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCocktailsComponent } from './dashboard-cocktails.component';

describe('DashboardCocktailsComponent', () => {
  let component: DashboardCocktailsComponent;
  let fixture: ComponentFixture<DashboardCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
