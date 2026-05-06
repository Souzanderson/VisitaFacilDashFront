import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinespinComponent } from './inlinespin.component';

describe('InlinespinComponent', () => {
  let component: InlinespinComponent;
  let fixture: ComponentFixture<InlinespinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinespinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinespinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
