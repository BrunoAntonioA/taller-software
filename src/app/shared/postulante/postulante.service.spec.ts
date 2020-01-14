import { TestBed } from '@angular/core/testing';

import { PostulanteService } from './postulante.service';

describe('PostulanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostulanteService = TestBed.get(PostulanteService);
    expect(service).toBeTruthy();
  });
});
