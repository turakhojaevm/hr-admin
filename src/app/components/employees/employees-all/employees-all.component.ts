import {Component, Input} from '@angular/core';
import {TEMPLATE_ACTION, TemplateAction} from "../../../models/template-action";
import {PaginatorModule, PaginatorState} from "primeng/paginator";
import {RouterLink} from "@angular/router";
import {SelectButtonModule} from "primeng/selectbutton";
import {SharedModule} from "primeng/api";
import {StatusDropdownComponent} from "../status-dropdown/status-dropdown.component";
import {TableModule} from "primeng/table";
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-employees-all',
  standalone: true,
  imports: [
    PaginatorModule,
    RouterLink,
    SelectButtonModule,
    SharedModule,
    StatusDropdownComponent,
    TableModule,
  ],
  templateUrl: './employees-all.component.html',
  styleUrl: './employees-all.component.scss'
})
export class EmployeesAllComponent {

  @Input({required: true}) employees: Employee[] = [];
  actionOptions: TemplateAction[] = TEMPLATE_ACTION;
  actionValue: TemplateAction = TEMPLATE_ACTION[1];
  first: number | any = 0;
  rows: number | any = 3;

  onPageChange(event: PaginatorState) {
    if (event.first) {
      this.first = event.first;
    }

    if (event.rows) {
      this.rows = event.rows;
    }
  }

}
