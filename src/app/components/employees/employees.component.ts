import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SelectButtonModule} from "primeng/selectbutton";
import {ButtonModule} from "primeng/button";
import {EmployeeSelection, SELECTION_BTN} from "../../models/employee-selection";
import {Employee} from "../../models/employee";
import {PaginatorModule} from "primeng/paginator";
import {EmployeeService} from "../../services/employee.service";
import {EmployeesAllComponent} from "./employees-all/employees-all.component";
import {EmployeesTeamsComponent} from "./employees-teams/employees-teams.component";
import {EmployeesOfficesComponent} from "./employees-offices/employees-offices.component";
import {combineLatest} from "rxjs";
import {EmployeesTeam} from "../../models/employees-team";
import {EmployeesAddPersonComponent} from "./employees-add-person/employees-add-person.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    SelectButtonModule,
    ButtonModule,
    PaginatorModule,
    EmployeesAllComponent,
    EmployeesTeamsComponent,
    EmployeesOfficesComponent,
    EmployeesAddPersonComponent,
    RouterLink,
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesComponent implements OnInit {

  selectionBtn: EmployeeSelection[] | undefined = SELECTION_BTN;
  selectionValue: number | undefined = 1;
  employees: Employee[] = [];
  employeesTeam: EmployeesTeam[] = [];

  constructor(
    private employeeService: EmployeeService,
  ) {}

  ngOnInit() {
    combineLatest([
      this.employeeService.getEmployees(),
      this.employeeService.getEmployeeTeams(),
    ])
      .subscribe(([employees, employeesTeam]) => {
        this.employees = employees;
        this.employeesTeam = employeesTeam;
    });
  }


}
