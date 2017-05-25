import { TestBed, inject } from '@angular/core/testing';

import { ProfileSectionService } from './profile-section.service';

describe('ProfileSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileSectionService]
    });
  });

  it('should ...', inject([ProfileSectionService], (service: ProfileSectionService) => {
    expect(service).toBeTruthy();
  }));
});
