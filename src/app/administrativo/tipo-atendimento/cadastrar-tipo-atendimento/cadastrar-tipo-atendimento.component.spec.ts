import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTipoAtendimentoComponent } from './cadastrar-tipo-atendimento.component';

describe('CadastrarTipoAtendimentoComponent', () => {
  let component: CadastrarTipoAtendimentoComponent;
  let fixture: ComponentFixture<CadastrarTipoAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTipoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTipoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
