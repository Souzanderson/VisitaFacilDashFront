import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddagendamentoComponent } from './addagendamento.component';

describe('AddagendamentoComponent', () => {
  let component: AddagendamentoComponent;
  let fixture: ComponentFixture<AddagendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddagendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddagendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
