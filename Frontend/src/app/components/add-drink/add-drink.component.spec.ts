import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrinkComponent } from './add-drink.component';

describe('AddDrinkComponent', () => {
  let component: AddDrinkComponent;
  let fixture: ComponentFixture<AddDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
