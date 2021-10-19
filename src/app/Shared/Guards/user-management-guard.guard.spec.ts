import { TestBed } from '@angular/core/testing';

import { UserManagementGuardGuard } from './user-management-guard.guard';

describe('UserManagementGuardGuard', () => {
  let guard: UserManagementGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserManagementGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
