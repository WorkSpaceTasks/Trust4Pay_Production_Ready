import { TestBed } from '@angular/core/testing';

import { AdminManagementGuardGuard } from './admin-management-guard.guard';

describe('AdminManagementGuardGuard', () => {
  let guard: AdminManagementGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminManagementGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
