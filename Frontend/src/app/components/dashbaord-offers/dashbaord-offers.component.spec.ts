import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordOffersComponent } from './dashbaord-offers.component';

describe('DashbaordOffersComponent', () => {
  let component: DashbaordOffersComponent;
  let fixture: ComponentFixture<DashbaordOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbaordOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbaordOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
