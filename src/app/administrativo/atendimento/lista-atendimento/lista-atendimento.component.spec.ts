import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaAtendimentoComponent } from './lista-atendimento.component';

describe('ListaAtendimentoComponent', () => {
  let component: ListaAtendimentoComponent;
  let fixture: ComponentFixture<ListaAtendimentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
