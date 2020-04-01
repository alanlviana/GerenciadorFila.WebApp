import { Component, OnInit } from '@angular/core';
import { TipoAtendimento } from 'src/app/models/tipo-atendimento';
import { TipoAtendimentoService } from 'src/app/api/tipo-atendimento.service';

@Component({
  selector: 'app-lista-tipo-atendimento',
  templateUrl: './lista-tipo-atendimento.component.html',
  styleUrls: ['./lista-tipo-atendimento.component.css']
})
export class ListaTipoAtendimentoComponent implements OnInit {

  tiposAtendimento: TipoAtendimento[];

  constructor(private tipoAtendimentoService: TipoAtendimentoService) { }

  ngOnInit(): void {
    this.tipoAtendimentoService.getAll().subscribe(data => {
      this.tiposAtendimento = data;
    })


  }

}
