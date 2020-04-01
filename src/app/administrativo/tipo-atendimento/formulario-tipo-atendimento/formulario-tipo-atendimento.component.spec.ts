import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTipoAtendimentoComponent } from './formulario-tipo-atendimento.component';

describe('FormularioTipoAtendimentoComponent', () => {
  let component: FormularioTipoAtendimentoComponent;
  let fixture: ComponentFixture<FormularioTipoAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTipoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTipoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
