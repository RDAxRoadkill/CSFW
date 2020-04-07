import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionEditComponent } from './subscription-edit.component';

import { Subscription } from 'src/app/model/subscription';

describe('SubscriptionEditComponent', () => {
  let component: SubscriptionEditComponent;
  let fixture: ComponentFixture<SubscriptionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule, RouterTestingModule  ],
      declarations: [ SubscriptionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.editSubForm.controls['Name'].setValue('');
    component.editSubForm.controls['Costs'].setValue('');
    component.editSubForm.controls['Hardwares'].setValue('');
    expect(component.editSubForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.editSubForm.controls['Name'].setValue('Test');
    component.editSubForm.controls['Costs'].setValue('16');
    component.editSubForm.controls['Hardwares'].setValue('someID');
    expect(component.editSubForm.valid).toBeTruthy();
  }));
});
