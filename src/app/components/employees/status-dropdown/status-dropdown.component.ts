import {Component, DoCheck} from '@angular/core';
import {Status, STATUS} from "../../../models/status";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-status-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './status-dropdown.component.html',
  styleUrl: './status-dropdown.component.scss'
})
export class StatusDropdownComponent {

  status: Status[] = STATUS;
  selectedStatus: Status = STATUS[0];

}
