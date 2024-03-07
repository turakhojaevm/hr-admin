import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOfficesComponent } from './employees-offices.component';

describe('EmployeesOfficesComponent', () => {
  let component: EmployeesOfficesComponent;
  let fixture: ComponentFixture<EmployeesOfficesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesOfficesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
