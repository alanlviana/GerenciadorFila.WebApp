import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atendimento } from '../models/atendimento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  api_url = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  CriarAtendimento(idTipoAtendimento: number){
    return this.httpClient.post<Atendimento>(this.api_url+'/atendimento', {
      "IdTipoAtendimento": idTipoAtendimento
    });
  }

  ObterTodos(){
    return this.httpClient.get(this.api_url+'/atendimento');
  }

  ObterPorStatus(status: string){
    return this.httpClient.get(this.api_url+'/Atendimento/ObterPorStatus?status='+status);
  }

  ProximoAtendimento(){
    return this.httpClient.post(this.api_url + '/Atendimento/ProximoAtendimento', {});
  }

  IniciarAtendimento(id: number){
    return this.httpClient.post(this.api_url + '/Atendimento/'+id+'/IniciarAtendimento', {});
  }

}
