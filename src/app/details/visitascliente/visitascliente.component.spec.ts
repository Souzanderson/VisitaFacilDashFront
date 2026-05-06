import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasclienteComponent } from './visitascliente.component';

describe('VisitasclienteComponent', () => {
  let component: VisitasclienteComponent;
  let fixture: ComponentFixture<VisitasclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
