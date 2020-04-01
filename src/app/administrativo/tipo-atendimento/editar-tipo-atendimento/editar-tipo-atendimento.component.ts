import { Component, OnInit } from '@angular/core';
import { TipoAtendimento } from 'src/app/models/tipo-atendimento';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TipoAtendimentoService } from 'src/app/api/tipo-atendimento.service';

@Component({
  selector: 'app-editar-tipo-atendimento',
  templateUrl: './editar-tipo-atendimento.component.html',
  styleUrls: ['./editar-tipo-atendimento.component.css']
})
export class EditarTipoAtendimentoComponent implements OnInit {

  tipoAtendimento: TipoAtendimento;

  constructor(public activatedRoute: ActivatedRoute, private tipoAtendimentoService: TipoAtendimentoService) { }

  ngOnInit(): void {
    

    this.activatedRoute.params.subscribe(p => {
      if (window.history.state.tipoAtendimento){
        this.tipoAtendimento = window.history.state.tipoAtendimento;
      }
      
      
      if (!this.tipoAtendimento){
        this.tipoAtendimentoService.getById(p.id).subscribe(data => {
          this.tipoAtendimento = data;
        })
      }

    })
  }

  salvo(event){
    this.tipoAtendimentoService.update(event).subscribe(d => {
      console.log(d);
    });
  }

}
