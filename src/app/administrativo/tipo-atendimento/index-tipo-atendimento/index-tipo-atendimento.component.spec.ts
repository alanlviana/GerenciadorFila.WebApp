import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndexTipoAtendimentoComponent } from './index-tipo-atendimento.component';

describe('IndexTipoAtendimentoComponent', () => {
  let component: IndexTipoAtendimentoComponent;
  let fixture: ComponentFixture<IndexTipoAtendimentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexTipoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTipoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
