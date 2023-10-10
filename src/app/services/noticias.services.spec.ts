import { TestBed } from '@angular/core/testing';

import { NoticiasServices } from './noticias.services';

describe('NoticiasServicesTsService', () => {
  let service: NoticiasServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiasServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
