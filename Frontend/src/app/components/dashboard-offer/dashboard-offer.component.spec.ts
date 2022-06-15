import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOfferComponent } from './dashboard-offer.component';

describe('DashboardOfferComponent', () => {
  let component: DashboardOfferComponent;
  let fixture: ComponentFixture<DashboardOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
