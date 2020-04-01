import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/api/atendimento.service';

@Component({
  selector: 'app-index-atendimento',
  templateUrl: './index-atendimento.component.html',
  styleUrls: ['./index-atendimento.component.css']
})
export class IndexAtendimentoComponent implements OnInit {

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(): void {
  }

  proximoAtendimento(){
    this.atendimentoService.ProximoAtendimento().subscribe(
      data => {
        console.log("Próximo atendimento chamado.");
    },erro => {
        console.log("Falha ao chamar próximo atendimento.");
    });
  }

}
