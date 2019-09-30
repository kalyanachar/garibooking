import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirecarComponent } from './hirecar.component';

describe('HirecarComponent', () => {
  let component: HirecarComponent;
  let fixture: ComponentFixture<HirecarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirecarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
