import { Component, OnInit } from '@angular/core';
import { TipoAtendimento } from 'src/app/models/tipo-atendimento';
import { TipoAtendimentoService } from 'src/app/api/tipo-atendimento.service';

@Component({
  selector: 'app-cadastrar-tipo-atendimento',
  templateUrl: './cadastrar-tipo-atendimento.component.html',
  styleUrls: ['./cadastrar-tipo-atendimento.component.css']
})
export class CadastrarTipoAtendimentoComponent implements OnInit {

  tipoAtendimento: TipoAtendimento = new TipoAtendimento();

  constructor(private tipoAtendimentoService: TipoAtendimentoService) { }

  ngOnInit(): void {
  }

  salvo(event){
    this.tipoAtendimentoService.insert(event).subscribe(d => {
      console.log(d);
    });
  }

}
