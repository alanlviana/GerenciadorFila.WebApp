import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraAtendimentoComponent } from './senheiro/cadastra-atendimento/cadastra-atendimento.component';
import { EscolheTipoAtendimentoComponent } from './senheiro/escolhe-tipo-atendimento/escolhe-tipo-atendimento.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [  
  {
    path:"senheiro",
    loadChildren: () => import('./senheiro/senheiro.module').then(m => m.SenheiroModule)
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./escolha-sistema/escolha-sistema.module').then(m => m.EscolhaSistemaModule)
  },
  { path: 'painel', loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule) },
  { path: 'administrativo', loadChildren: () => import('./administrativo/administrativo.module').then(m => m.AdministrativoModule) }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
