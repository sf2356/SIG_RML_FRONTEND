/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EquipmentServiceService } from './EquipmentService.service';

describe('Service: EquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipmentServiceService]
    });
  });

  it('should ...', inject([EquipmentServiceService], (service: EquipmentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
