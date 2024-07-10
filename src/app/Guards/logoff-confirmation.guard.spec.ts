import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { logoffConfirmationGuard } from './logoff-confirmation.guard';

describe('logoffConfirmationGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logoffConfirmationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
