import { Component, OnInit } from '@angular/core';
import { SignalrService } from 'src/app/api/signalr.service';
import { AtendimentoService } from 'src/app/api/atendimento.service';

@Component({
  selector: 'app-painel-geral',
  templateUrl: './painel-geral.component.html',
  styleUrls: ['./painel-geral.component.css']
})
export class PainelGeralComponent implements OnInit {
  listaUltimasChamadas: Array<object>;
  listaAguardando: Array<object>;
  ultimaChamada: any;

  constructor(public signalRService: SignalrService, private atendimentoService: AtendimentoService){

  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.buscarUltimasChamadas();
    this.buscarFilaEspera();

    this.signalRService.AtendimentoInserido.subscribe((data) => {
      this.buscarFilaEspera();
    });

    this.signalRService.StatusAtendimentoAtualizado.subscribe((data) => {
      this.buscarUltimasChamadas();
      this.buscarFilaEspera();
    });
  }

  buscarUltimasChamadas(){
    this.atendimentoService.getByStatus("Aguardando").subscribe(data => {
      this.listaUltimasChamadas = data as Array<object>;
      if (this.listaUltimasChamadas.length > 0){
        this.ultimaChamada = this.listaUltimasChamadas[this.listaUltimasChamadas.length-1];
      }else{
        this.ultimaChamada = null;
      }
    });
  }

  buscarFilaEspera(){
    this.atendimentoService.getByStatus("Pendente").subscribe(data => {
      this.listaAguardando = data as Array<object>;
    });
  }
}
