import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpecService } from './spec.service';
import { Specifications } from 'src/app/model/specifications';

describe('SpecService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule, RouterTestingModule  ]
  }));

  it('should be created', () => {
    const service: SpecService = TestBed.get(SpecService);
    expect(service).toBeTruthy();
  });
});
