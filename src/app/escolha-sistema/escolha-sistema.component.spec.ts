import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaSistemaComponent } from './escolha-sistema.component';

describe('EscolhaSistemaComponent', () => {
  let component: EscolhaSistemaComponent;
  let fixture: ComponentFixture<EscolhaSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
