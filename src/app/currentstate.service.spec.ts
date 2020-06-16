import { TestBed } from '@angular/core/testing';

import { CurrentstateService } from './currentstate.service';

describe('CurrentstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentstateService = TestBed.get(CurrentstateService);
    expect(service).toBeTruthy();
  });
});
