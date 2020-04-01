import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoAtendimento } from '../models/tipo-atendimento';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoAtendimentoService {

  api_url = environment.api_url;

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<TipoAtendimento[]>(this.api_url+'/tipoatendimento');
  }

  getById(id: number){
    return  this.httpClient.get<TipoAtendimento>(this.api_url+'/tipoatendimento/'+id)
  }

  insert(tipoAtendimento: TipoAtendimento){
    return this.httpClient.post(this.api_url+'/tipoatendimento', tipoAtendimento);
  }

  update(tipoAtendimento: TipoAtendimento){
    return this.httpClient.put(this.api_url+'/tipoatendimento/'+tipoAtendimento.id, tipoAtendimento);
  }




}
