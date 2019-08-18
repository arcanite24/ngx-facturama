import { TestBed } from '@angular/core/testing';

import { FacturamaService } from './ngx-facturama.service';

describe('NgxFacturamaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturamaService = TestBed.get(FacturamaService);
    expect(service).toBeTruthy();
  });
});
