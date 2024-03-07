import { Injectable } from '@angular/core';
import {from, Observable, of} from "rxjs";
import {Employee, EMPLOYEE_DATA} from "../models/employee";
import {EMPLOYEE_TEAM, EmployeesTeam} from "../models/employees-team";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEE_DATA);
  }

  getEmployeeTeams(): Observable<EmployeesTeam[]> {
    return of(EMPLOYEE_TEAM);
  }
}
