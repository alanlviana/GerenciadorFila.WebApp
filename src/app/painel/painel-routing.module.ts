import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelGeralComponent } from './painel-geral/painel-geral.component';

const routes: Routes = [{ path: '', component: PainelGeralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
