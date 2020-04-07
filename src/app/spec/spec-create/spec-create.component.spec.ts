import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecCreateComponent } from './spec-create.component';
import { Observable } from 'rxjs';
import { Specifications } from 'src/app/model/specifications';
import { SpecService } from 'src/app/service/spec.service';

describe('SpecCreateComponent', () => {
  let component: SpecCreateComponent;
  let fixture: ComponentFixture<SpecCreateComponent>;

  class MockSpecService{
    getSpecs(): Observable<Specifications[]> {
      let spec: Specifications;
      spec = {
        Name: "Test",
        Type: "Corsair",
        AmountType: "GB",
        Amount: 16
      }

      let specs = new Observable<Specifications[]>((observer)=> {
        observer.next([spec, spec]);
      })

      return specs;
    }
  }
  let service: MockSpecService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule, RouterTestingModule  ],
      declarations: [ SpecCreateComponent ],
      providers: [ { provide: SpecService, useValue: MockSpecService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    // Arrange
    component.specForm.controls['name'].setValue('');
    component.specForm.controls['type'].setValue('');
    component.specForm.controls['amount'].setValue('');
    component.specForm.controls['amountType'].setValue('');

    // Assert
    expect(component.specForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    //Arrange / Act
    component.specForm.controls['name'].setValue('Test');
    component.specForm.controls['type'].setValue('Corsair');
    component.specForm.controls['amount'].setValue('16');
    component.specForm.controls['amountType'].setValue('GB');

    // Assert
    expect(component.specForm.valid).toBeTruthy();
  }));

  it('should fail to submit', function() {
    // Arrange
    component.onSubmit();

    //Assert
    expect(false);
  });

});
