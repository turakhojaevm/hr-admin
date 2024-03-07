import {Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbComponent} from "../../core/breadcrumb/breadcrumb.component";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {EmployeeSelection, SELECTION_BTN} from "../../models/employee-selection";
import {TEMPLATE_ACTION, TemplateAction} from "../../models/template-action";
import {TableModule} from "primeng/table";
import {Employee, EMPLOYEE_DATA} from "../../models/employee";
import {StatusDropdownComponent} from "./status-dropdown/status-dropdown.component";
import {PaginatorModule, PaginatorState} from "primeng/paginator";
import {EmployeeService} from "../../services/employee.service";
import {EmployeesAllComponent} from "./employees-all/employees-all.component";
import {EmployeesTeamsComponent} from "./employees-teams/employees-teams.component";
import {EmployeesOfficesComponent} from "./employees-offices/employees-offices.component";
import {combineLatest} from "rxjs";
import {EmployeesTeam} from "../../models/employees-team";

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    BreadcrumbModule,
    SelectButtonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    StatusDropdownComponent,
    PaginatorModule,
    EmployeesAllComponent,
    EmployeesTeamsComponent,
    EmployeesOfficesComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesComponent implements OnInit, DoCheck {

  selectionBtn: EmployeeSelection[] | undefined = SELECTION_BTN;
  selectionValue: number | undefined = 1;
  actionOptions: TemplateAction[] = TEMPLATE_ACTION;
  actionValue: TemplateAction = TEMPLATE_ACTION[1];
  employees: Employee[] = [];
  employeesTeam: EmployeesTeam[] = [];
  first: number | any = 0;
  rows: number | any = 3;

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

  ngDoCheck() {
  }

  onPageChange(event: PaginatorState) {
    if (event.first) {
      this.first = event.first;
    }

    if (event.rows) {
      this.rows = event.rows;
    }
  }
}
