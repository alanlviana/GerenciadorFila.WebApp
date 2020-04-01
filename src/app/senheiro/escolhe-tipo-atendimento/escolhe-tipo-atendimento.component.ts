import { Component, OnInit } from '@angular/core';
import { TipoAtendimento } from 'src/app/models/tipo-atendimento';
import { TipoAtendimentoService } from 'src/app/api/tipo-atendimento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolhe-tipo-atendimento',
  templateUrl: './escolhe-tipo-atendimento.component.html',
  styleUrls: ['./escolhe-tipo-atendimento.component.css']
})
export class EscolheTipoAtendimentoComponent implements OnInit {

  public tiposAtendimento: TipoAtendimento[];

  constructor(private tipoAtendimentoService: TipoAtendimentoService, private router: Router){}

  ngOnInit(){
    this.tipoAtendimentoService.getAll().subscribe(data => {
      this.tiposAtendimento = data;
      console.log(this.tiposAtendimento);
    })
  }
}
