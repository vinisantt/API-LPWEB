import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DeletarService {
  constructor(private http: HttpClient, private auth$: AuthService) {}

  deletarPerfil(perfil: any) {
    this.http
      .delete(
        environment.API_URL.concat(`perfis/${perfil.id}/`),
        this.auth$.httpOptions()
      )
      .subscribe();
  }
}
