import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditarTipoAtendimentoComponent } from './editar-tipo-atendimento.component';

describe('EditarTipoAtendimentoComponent', () => {
  let component: EditarTipoAtendimentoComponent;
  let fixture: ComponentFixture<EditarTipoAtendimentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTipoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
