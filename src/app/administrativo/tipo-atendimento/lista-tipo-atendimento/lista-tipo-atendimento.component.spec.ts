import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoAtendimentoComponent } from './lista-tipo-atendimento.component';

describe('ListaTipoAtendimentoComponent', () => {
  let component: ListaTipoAtendimentoComponent;
  let fixture: ComponentFixture<ListaTipoAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTipoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTipoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
