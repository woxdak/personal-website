import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroWelComponent } from './caro-wel.component';

describe('CaroWelComponent', () => {
  let component: CaroWelComponent;
  let fixture: ComponentFixture<CaroWelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaroWelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroWelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
