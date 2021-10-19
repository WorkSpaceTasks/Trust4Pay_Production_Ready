import { TestBed } from '@angular/core/testing';

import { AdminManagementServiceService } from './admin-management-service.service';

describe('AdminManagementServiceService', () => {
  let service: AdminManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
