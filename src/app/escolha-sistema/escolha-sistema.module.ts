import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolhaSistemaRoutingModule } from './escolha-sistema-routing.module';
import { EscolhaSistemaComponent } from './escolha-sistema.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EscolhaSistemaComponent],
  imports: [
    CommonModule,
    RouterModule,
    EscolhaSistemaRoutingModule
  ]
})
export class EscolhaSistemaModule { }
