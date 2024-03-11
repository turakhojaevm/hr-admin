import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAddPersonComponent } from './employees-add-person.component';

describe('EmployeesAddPersonComponent', () => {
  let component: EmployeesAddPersonComponent;
  let fixture: ComponentFixture<EmployeesAddPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesAddPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesAddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
