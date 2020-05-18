import { AtualizacaoService } from './../atualizacao.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-atualiza-perfil',
  templateUrl: './atualiza-perfil.component.html',
  styleUrls: ['./atualiza-perfil.component.css'],
})
export class AtualizaPerfilComponent implements OnInit {
  perfil: any;
  temPerfil = null;

  constructor(
    public atualiza$: AtualizacaoService,
    public auth$: AuthService,
    private router: Router,
    private perfil$: PerfilService
  ) {}

  user: any;
  nome: string = null;
  sexo: string = null;
  cpf: string = null;
  telefone: string = null;
  endereco: string = null;
  estado_uf: string = null;
  cidade: string = null;
  cep: string = null;
  estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  ngOnInit(): void {
    this.user = this.auth$.user();
    if (this.user) {
      this.perfil$.perfilLogado().subscribe(
        (dados) => {
          this.perfil = dados;
          this.nome = this.perfil.nome;
          this.sexo = this.perfil.sexo;
          this.cpf = this.perfil.cpf;
          this.telefone = this.perfil.telefone;
          this.endereco = this.perfil.endereco;
          this.estado_uf = this.perfil.estado_uf;
          this.cidade = this.perfil.cidade;
          this.cep = this.perfil.cep;
        },
        (erro) => (this.temPerfil = false)
      );
    } else {
      this.router.navigate(['/login']);
      console.log('teste');
    }
  }

  enviaDados() {
    let dados = {
      usuario: this.user.id,
      nome: this.nome,
      sexo: this.sexo,
      cpf: this.cpf,
      telefone: this.telefone,
      endereco: this.endereco,
      estado_uf: this.estado_uf,
      cidade: this.cidade,
      cep: this.cep,
    };
    this.atualiza$.atualizarPerfil(dados, this.perfil);
  }
}
