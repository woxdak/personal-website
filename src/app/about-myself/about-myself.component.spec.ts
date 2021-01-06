import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMyselfComponent } from './about-myself.component';

describe('AboutMyselfComponent', () => {
  let component: AboutMyselfComponent;
  let fixture: ComponentFixture<AboutMyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMyselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
