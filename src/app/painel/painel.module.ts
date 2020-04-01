import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { PainelGeralComponent } from './painel-geral/painel-geral.component';
import { APIModule } from '../api/api.module';


@NgModule({
  declarations: [PainelGeralComponent],
  imports: [
    CommonModule,
    APIModule,
    PainelRoutingModule
  ]
})
export class PainelModule { }
