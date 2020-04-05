import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HardwareApiService } from './hardware-api.service';

describe('HardwareApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: HardwareApiService = TestBed.get(HardwareApiService);
    expect(service).toBeTruthy();
  });
});
