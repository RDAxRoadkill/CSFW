import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guard } from './guard'

describe('Guard', () => {
  let component: Guard;
  let fixture: ComponentFixture<Guard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create guard', () => {
    expect(component).toBeTruthy();
  });
});
