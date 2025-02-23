/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LaboratoryServiceService } from './LaboratoryService.service';

describe('Service: LaboratoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaboratoryServiceService]
    });
  });

  it('should ...', inject([LaboratoryServiceService], (service: LaboratoryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
