import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  api_url = environment.api_url;

  constructor() { }

  private hubConnection: signalR.HubConnection
  
  AtendimentoIniciado: Subject<any> = new Subject();
  AtendimentoInserido: Subject<any> = new Subject();
  StatusAtendimentoAtualizado: Subject<any> = new Subject();

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(this.api_url+'/FilaHub')
                            .withAutomaticReconnect()
                            .build();
 
    this.hubConnection
      .start()
      .then(() => console.log('Conexão iniciada.'))
      .catch(err => console.log('Falha ao conectar: ' + err));

      this.hubConnection.on('AtendimentoInserido', data => this.AtendimentoInserido.next(data));
      this.hubConnection.on('StatusAtendimentoAtualizado', data => this.StatusAtendimentoAtualizado.next(data));
      this.hubConnection.on('AtendimentoIniciado', data => this.AtendimentoIniciado.next(data));
  }
}
