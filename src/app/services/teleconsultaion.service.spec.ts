import { TestBed } from '@angular/core/testing';

import { TeleconsultaionService } from './teleconsultaion.service';

describe('TeleconsultaionService', () => {
  let service: TeleconsultaionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeleconsultaionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
