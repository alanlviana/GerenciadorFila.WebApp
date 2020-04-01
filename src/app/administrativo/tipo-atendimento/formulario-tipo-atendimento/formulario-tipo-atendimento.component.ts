import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TipoAtendimento } from 'src/app/models/tipo-atendimento';

@Component({
  selector: 'app-formulario-tipo-atendimento',
  templateUrl: './formulario-tipo-atendimento.component.html',
  styleUrls: ['./formulario-tipo-atendimento.component.css']
})
export class FormularioTipoAtendimentoComponent implements OnInit {

  @Input() tipoAtendimento: TipoAtendimento;
  @Output() salvo = new EventEmitter<TipoAtendimento>();

  constructor() { }

  ngOnInit(): void {
    if (!this.tipoAtendimento){
      this.tipoAtendimento = new TipoAtendimento();
    }
  }

}
