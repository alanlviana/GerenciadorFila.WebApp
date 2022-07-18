import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CadastrarTipoAtendimentoComponent } from './cadastrar-tipo-atendimento.component';

describe('CadastrarTipoAtendimentoComponent', () => {
  let component: CadastrarTipoAtendimentoComponent;
  let fixture: ComponentFixture<CadastrarTipoAtendimentoComponent>;

  beforeEach(waitForAsync(() => {
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
