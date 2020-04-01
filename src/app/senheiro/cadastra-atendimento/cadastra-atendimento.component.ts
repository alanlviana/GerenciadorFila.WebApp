import { Component, OnInit } from '@angular/core';
import { Atendimento } from 'src/app/models/atendimento';
import { AtendimentoService } from 'src/app/api/atendimento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastra-atendimento',
  templateUrl: './cadastra-atendimento.component.html',
  styleUrls: ['./cadastra-atendimento.component.css']
})
export class CadastraAtendimentoComponent implements OnInit {

  public AtendimentoGerado:string;
  public MensagemDeRetorno: string;

  constructor(private atendimentoService: AtendimentoService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.cadastrarAtendimento(p.id);
    });


  }

  cadastrarAtendimento(idTipoAtendimento: number){
    this.atendimentoService.cadastrarAtendimento(idTipoAtendimento).subscribe(
      atendimento => this.cadatroAtendimentoSucesso(atendimento),
      () => this.cadastroAtendimentoErro())
  }

  cadatroAtendimentoSucesso(atendimento:Atendimento){
    this.AtendimentoGerado =  atendimento.identificadorChamada;
      setTimeout(()=>{
        this.router.navigate(["/senheiro"]);
      },3000)
  }

  cadastroAtendimentoErro(){
    this.MensagemDeRetorno = "Não foi possível gerar atendimento. Tente novamente.";
    setTimeout(()=>{
      this.router.navigate(["/senheiro"]);
    },3000)
  }

}
