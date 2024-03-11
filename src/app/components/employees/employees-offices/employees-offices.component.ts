import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";
import {TableModule} from "primeng/table";
import {Employee} from "../../../models/employee";
import {EmployeeService} from "../../../services/employee.service";
import {StatusDropdownComponent} from "../status-dropdown/status-dropdown.component";

@Component({
  selector: 'app-employees-offices',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    AccordionModule,
    AvatarModule,
    AvatarGroupModule,
    TableModule,
    StatusDropdownComponent
  ],
  templateUrl: './employees-offices.component.html',
  styleUrl: './employees-offices.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesOfficesComponent implements OnInit {

  offices: number = 1;
  officeForm!: FormGroup;
  avatars: string[] = [
    './assets/img/avatar-02.jpg',
    './assets/img/avatar-03.jpg',
    './assets/img/avatar-04.jpg',
    './assets/img/avatar-05.jpg',
    './assets/img/avatar-06.jpg',
    './assets/img/avatar-07.jpg'
  ];
  employees: Employee[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.officeForm = this.fb.group({
      name: ['', [Validators.required]],
    });
    this.employeeService.getEmployees()
      .subscribe(employees => {
      this.employees = employees;
    });
  }

  addOffice() {
    console.log(this.officeForm)
  }

}
