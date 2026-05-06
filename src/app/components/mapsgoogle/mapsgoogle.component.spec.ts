import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsgoogleComponent } from './mapsgoogle.component';

describe('MapsgoogleComponent', () => {
  let component: MapsgoogleComponent;
  let fixture: ComponentFixture<MapsgoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsgoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsgoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
