import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IndexAtendimentoComponent } from './index-atendimento.component';

describe('IndexAtendimentoComponent', () => {
  let component: IndexAtendimentoComponent;
  let fixture: ComponentFixture<IndexAtendimentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
