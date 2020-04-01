import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexAtendimentoComponent } from './index-atendimento/index-atendimento.component';
import { ListaAtendimentoComponent } from './lista-atendimento/lista-atendimento.component';

const routes: Routes = [
  {path: '', component: IndexAtendimentoComponent, children: [
    {path: '', component: ListaAtendimentoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
