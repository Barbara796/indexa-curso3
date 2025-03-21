import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContactoComponent } from './perfil-contacto.component';

describe('PerfilContactoComponent', () => {
  let component: PerfilContactoComponent;
  let fixture: ComponentFixture<PerfilContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
