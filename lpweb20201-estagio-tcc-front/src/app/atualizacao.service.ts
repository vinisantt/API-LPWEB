import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AtualizacaoService {
  constructor(private http: HttpClient, private auth$: AuthService) {}

  atualizarPerfil(dados: any, perfil: any) {
    console.log(environment.API_URL.concat(`perfis/${perfil.id}/`));
    this.http
      .put(
        environment.API_URL.concat(`perfis/${perfil.id}/`),
        dados,
        this.auth$.httpOptions()
      )
      .subscribe();
  }
}
