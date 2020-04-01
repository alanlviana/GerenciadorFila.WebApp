import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexTipoAtendimentoComponent } from './index-tipo-atendimento/index-tipo-atendimento.component';
import { ListaTipoAtendimentoComponent } from './lista-tipo-atendimento/lista-tipo-atendimento.component';
import { EditarTipoAtendimentoComponent } from './editar-tipo-atendimento/editar-tipo-atendimento.component';
import { CadastrarTipoAtendimentoComponent } from './cadastrar-tipo-atendimento/cadastrar-tipo-atendimento.component';

const routes: Routes = [
  {path: '', component: IndexTipoAtendimentoComponent, children: [
    {path: '', component: ListaTipoAtendimentoComponent},
    {path: ':id/editar', component: EditarTipoAtendimentoComponent},
    {path: 'cadastrar', component: CadastrarTipoAtendimentoComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoAtendimentoRoutingModule { }
