import { TestBed, inject } from '@angular/core/testing';

import { MissionDetailService } from './mission-detail.service';

describe('MissionDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionDetailService]
    });
  });

  it('should be created', inject([MissionDetailService], (service: MissionDetailService) => {
    expect(service).toBeTruthy();
  }));
});
