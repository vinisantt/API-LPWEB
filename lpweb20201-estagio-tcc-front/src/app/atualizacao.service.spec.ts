import { TestBed } from '@angular/core/testing';

import { AtualizacaoService } from './atualizacao.service';

describe('AtualizacaoService', () => {
  let service: AtualizacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
