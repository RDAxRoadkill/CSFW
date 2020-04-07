import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecEditComponent } from './spec-edit.component';

describe('SpecEditComponent', () => {
  let component: SpecEditComponent;
  let fixture: ComponentFixture<SpecEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule, RouterTestingModule  ],
      declarations: [ SpecEditComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.editSpecForm.controls['Name'].setValue('');
    component.editSpecForm.controls['Type'].setValue('');
    component.editSpecForm.controls['Amount'].setValue('');
    component.editSpecForm.controls['AmountType'].setValue('');
    expect(component.editSpecForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.editSpecForm.controls['Name'].setValue('Test');
    component.editSpecForm.controls['Type'].setValue('Corsair');
    component.editSpecForm.controls['Amount'].setValue('16');
    component.editSpecForm.controls['AmountType'].setValue('GB');
    expect(component.editSpecForm.valid).toBeTruthy();
  }));
});