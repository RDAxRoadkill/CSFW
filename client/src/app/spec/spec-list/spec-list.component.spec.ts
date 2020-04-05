import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';

import { SpecListComponent } from './spec-list.component';

describe('SpecListComponent', () => {
  let component: SpecListComponent;
  let fixture: ComponentFixture<SpecListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecListComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
