import { TestBed } from '@angular/core/testing';

import { Proyecto } from './proyecto.model';
import { ProyectoService } from './proyecto.service';

describe('ProyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectoService = TestBed.get(ProyectoService);
    expect(service).toBeTruthy();
  });
});
