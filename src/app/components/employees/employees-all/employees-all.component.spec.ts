import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAllComponent } from './employees-all.component';

describe('EmployeesAllComponent', () => {
  let component: EmployeesAllComponent;
  let fixture: ComponentFixture<EmployeesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
