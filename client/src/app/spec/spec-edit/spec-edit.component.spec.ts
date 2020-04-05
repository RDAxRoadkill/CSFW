import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder , FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecEditComponent } from './spec-edit.component';

describe('SpecEditComponent', () => {
  let component: SpecEditComponent;
  let fixture: ComponentFixture<SpecEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule, ActivatedRoute, Router],
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
});