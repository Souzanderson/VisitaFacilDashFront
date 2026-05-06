import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdistanceComponent } from './chartdistance.component';

describe('ChartdistanceComponent', () => {
  let component: ChartdistanceComponent;
  let fixture: ComponentFixture<ChartdistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartdistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
