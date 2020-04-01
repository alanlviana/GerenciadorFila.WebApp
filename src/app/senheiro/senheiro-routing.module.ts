import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolheTipoAtendimentoComponent } from './escolhe-tipo-atendimento/escolhe-tipo-atendimento.component';
import { CadastraAtendimentoComponent } from './cadastra-atendimento/cadastra-atendimento.component';

const routes: Routes = [
  {
    path: '',
    component: EscolheTipoAtendimentoComponent
  },
  {
    path: 'atendimento/salvar/tipoatendimento/:id',
    component: CadastraAtendimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SenheiroRoutingModule { }