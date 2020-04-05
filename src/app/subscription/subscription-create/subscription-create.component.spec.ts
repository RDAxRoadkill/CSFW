import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionCreateComponent } from './subscription-create.component';

describe('SubscriptionCreateComponent', () => {
  let component: SubscriptionCreateComponent;
  let fixture: ComponentFixture<SubscriptionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, HttpClientTestingModule ],
      declarations: [ SubscriptionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
