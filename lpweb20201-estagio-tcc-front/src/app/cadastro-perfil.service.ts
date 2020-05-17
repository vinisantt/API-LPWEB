import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CadastroPerfilService {
  constructor(private http: HttpClient, private auth$: AuthService) {}

  cadastrarPerfil(dados: any) {
    this.http
      .post(
        environment.API_URL.concat('perfil-logado/'),
        dados,
        this.auth$.httpOptions()
      )
      .subscribe();
  }
}
