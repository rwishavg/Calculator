import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodmasCalcComponent } from './bodmas-calc.component';

describe('BodmasCalcComponent', () => {
  let component: BodmasCalcComponent;
  let fixture: ComponentFixture<BodmasCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodmasCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodmasCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
