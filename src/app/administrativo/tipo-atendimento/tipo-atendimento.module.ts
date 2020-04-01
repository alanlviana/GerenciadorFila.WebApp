import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndexTipoAtendimentoComponent } from './index-tipo-atendimento/index-tipo-atendimento.component';
import { ListaTipoAtendimentoComponent } from './lista-tipo-atendimento/lista-tipo-atendimento.component';
import { TipoAtendimentoRoutingModule } from './tipo-atendimento-routing.module';
import { APIModule } from 'src/app/api/api.module';
import { EditarTipoAtendimentoComponent } from './editar-tipo-atendimento/editar-tipo-atendimento.component';
import { FormularioTipoAtendimentoComponent } from './formulario-tipo-atendimento/formulario-tipo-atendimento.component';
import { CadastrarTipoAtendimentoComponent } from './cadastrar-tipo-atendimento/cadastrar-tipo-atendimento.component';



@NgModule({
  declarations: [IndexTipoAtendimentoComponent, ListaTipoAtendimentoComponent, EditarTipoAtendimentoComponent, FormularioTipoAtendimentoComponent, CadastrarTipoAtendimentoComponent],
  imports: [
    CommonModule,
    TipoAtendimentoRoutingModule,
    APIModule,
    FormsModule
  ]
})
export class TipoAtendimentoModule { }
