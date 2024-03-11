import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'app-employees-add-person',
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  templateUrl: './employees-add-person.component.html',
  styleUrl: './employees-add-person.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesAddPersonComponent implements OnInit {

  addTeam!: FormGroup;
  countries: any[] | undefined = ['Country of Employment', 'Country 1', 'Country 2'];
  permanent: any[] | undefined = ['Permanent', 'Freelance'];
  currency: any[] | undefined = ['Currency', '$'];
  frequency: any[] | undefined = ['Frequency', 'Annauly', 'Month', 'Weekly', 'Daily'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.addTeam = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      country: ['', [Validators.required]],
      empStartDate: ['', [Validators.required]],
      jobTitle: ['', [Validators.required]],
      permanent: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      frequency: ['', [Validators.required]],
      salStartDate: ['', [Validators.required]],
    });
  }

  submitTeam() {
    console.log(this.addTeam.value)
  }

}
