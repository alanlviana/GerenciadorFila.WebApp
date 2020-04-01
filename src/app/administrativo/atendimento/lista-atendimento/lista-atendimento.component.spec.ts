import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtendimentoComponent } from './lista-atendimento.component';

describe('ListaAtendimentoComponent', () => {
  let component: ListaAtendimentoComponent;
  let fixture: ComponentFixture<ListaAtendimentoComponent>;

  beforeEach(async(() => {
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
