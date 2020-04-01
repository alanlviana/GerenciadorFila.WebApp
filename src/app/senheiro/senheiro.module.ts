import { NgModule } from '@angular/core';
import { CadastraAtendimentoComponent } from './cadastra-atendimento/cadastra-atendimento.component';
import { EscolheTipoAtendimentoComponent } from './escolhe-tipo-atendimento/escolhe-tipo-atendimento.component';
import { APIModule } from '../api/api.module';
import { CommonModule } from '@angular/common';
import { SenheiroRoutingModule } from './senheiro-routing.module';


@NgModule({
  declarations: [CadastraAtendimentoComponent, EscolheTipoAtendimentoComponent],
  imports: [
    CommonModule,
    APIModule,
    SenheiroRoutingModule
  ],
  exports: [CadastraAtendimentoComponent, EscolheTipoAtendimentoComponent]
})
export class SenheiroModule { }
