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

  cadastrarAtendimento(idTipoAtendimento: number){
    console.log("cadastrarAtendimento:"+idTipoAtendimento);
    return this.httpClient.post<Atendimento>(this.api_url+'/atendimento', {
      "IdTipoAtendimento": idTipoAtendimento
    });
  }

  getAll(){
    return this.httpClient.get(this.api_url+'/atendimento');
  }

  getByStatus(status: string){
    return this.httpClient.get(this.api_url+'/atendimento/Status/'+status);
  }
}
