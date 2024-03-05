import { Injectable } from '@angular/core';
import {from, Observable, of} from "rxjs";
import {Employee, EMPLOYEE_DATA} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEE_DATA);
  }
}
