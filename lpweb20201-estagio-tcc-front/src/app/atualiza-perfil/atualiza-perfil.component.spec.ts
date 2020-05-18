import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaPerfilComponent } from './atualiza-perfil.component';

describe('AtualizaPerfilComponent', () => {
  let component: AtualizaPerfilComponent;
  let fixture: ComponentFixture<AtualizaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
