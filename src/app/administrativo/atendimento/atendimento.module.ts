import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexAtendimentoComponent } from './index-atendimento/index-atendimento.component';
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { ListaAtendimentoComponent } from './lista-atendimento/lista-atendimento.component';
import { APIModule } from 'src/app/api/api.module';



@NgModule({
  declarations: [IndexAtendimentoComponent, ListaAtendimentoComponent],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
    APIModule
  ]
})
export class AtendimentoModule { }
