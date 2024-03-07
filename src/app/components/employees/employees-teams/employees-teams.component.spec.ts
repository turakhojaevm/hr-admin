import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesTeamsComponent } from './employees-teams.component';

describe('EmployeesTeamsComponent', () => {
  let component: EmployeesTeamsComponent;
  let fixture: ComponentFixture<EmployeesTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
