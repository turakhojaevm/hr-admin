import {Component, Input, OnInit} from '@angular/core';
import {EmployeesTeam, TEAM_ACTION, TeamAction} from "../../../models/employees-team";
import {TeamActionEnum} from "../../../models/team-action";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-employees-teams',
  standalone: true,
  imports: [
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './employees-teams.component.html',
  styleUrl: './employees-teams.component.scss'
})
export class EmployeesTeamsComponent implements OnInit {

  @Input({required: true}) employeesTeam: EmployeesTeam[] = [];
  teamActions: TeamAction[] = TEAM_ACTION;
  visibleEdit: boolean = false;
  teamForm!: FormGroup;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.teamForm = this.fb.group({
      name: ['', Validators.required, Validators.maxLength(5)],
    });
  }

  editDelete(actionId: number, event: any): void {
    if (actionId === TeamActionEnum.edit) {
      this.visibleEdit = true;
    } else if (actionId === TeamActionEnum.delete) {
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this team?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
      });
    }
  }

  addEditTeam(): void {

  }

}
