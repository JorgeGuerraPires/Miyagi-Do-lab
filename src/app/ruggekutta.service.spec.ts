import { TestBed } from '@angular/core/testing';

import { RuggekuttaService } from './ruggekutta.service';

xdescribe('RuggekuttaService', () => {
  let service: RuggekuttaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuggekuttaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
