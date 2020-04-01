import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component:IndexComponent, children: [
    {
      path:"atendimento",
      loadChildren: () => import('./atendimento/atendimento.module').then(m => m.AtendimentoModule)
    },
    {
      path:"tipoatendimento",
      loadChildren: () => import('./tipo-atendimento/tipo-atendimento.module').then(m => m.TipoAtendimentoModule)
    }
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativoRoutingModule { }
