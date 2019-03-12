import { TestBed } from '@angular/core/testing';

import { BluetoothDataService } from './bluetooth-data.service';

describe('BluetoothDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BluetoothDataService = TestBed.get(BluetoothDataService);
    expect(service).toBeTruthy();
  });
});
