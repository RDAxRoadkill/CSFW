import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpecService } from './spec.service';

describe('SpecService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SpecService = TestBed.get(SpecService);
    expect(service).toBeTruthy();
  });
});
