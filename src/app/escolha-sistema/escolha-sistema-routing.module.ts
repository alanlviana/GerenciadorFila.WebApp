import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhaSistemaComponent } from './escolha-sistema.component';

const routes: Routes = [{ path: '', component: EscolhaSistemaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolhaSistemaRoutingModule { }
