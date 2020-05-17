import { TestBed } from '@angular/core/testing';

import { CadastroPerfilService } from './cadastro-perfil.service';

describe('CadastroPerfilService', () => {
  let service: CadastroPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
