import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionCreateComponent } from './subscription-create.component';

describe('SubscriptionCreateComponent', () => {
  let component: SubscriptionCreateComponent;
  let fixture: ComponentFixture<SubscriptionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule, RouterTestingModule  ],
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

  
  it('form should be invalid', async(() => {
    // Arrange
    component.subscriptionForm.controls['Name'].setValue('');
    component.subscriptionForm.controls['Costs'].setValue('');
    component.subscriptionForm.controls['Hardwares'].setValue('');

    // Assert
    expect(component.subscriptionForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    //Arrange / Act
    component.subscriptionForm.controls['Name'].setValue('Test');
    component.subscriptionForm.controls['Costs'].setValue('1');
    component.subscriptionForm.controls['Hardwares'].setValue('someID');

    // Assert
    expect(component.subscriptionForm.valid).toBeTruthy();
  }));

  it('should fail to submit', function() {
    // Arrange
    component.onSubmit();

    //Assert
    expect(false);
  });
});
