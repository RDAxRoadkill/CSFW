import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionService } from './subscription.service';

describe('SubscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SubscriptionService = TestBed.get(SubscriptionService);
    expect(service).toBeTruthy();
  });
});
