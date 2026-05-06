import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitadetailComponent } from './visitadetail.component';

describe('VisitadetailComponent', () => {
  let component: VisitadetailComponent;
  let fixture: ComponentFixture<VisitadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitadetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
