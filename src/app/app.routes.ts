import { Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EmployeesComponent} from "./components/employees/employees.component";
import {CompanyComponent} from "./components/company/company.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LeaveComponent} from "./components/leave/leave.component";
import {ReviewComponent} from "./components/review/review.component";
import {ReportComponent} from "./components/report/report.component";
import {ManageComponent} from "./components/manage/manage.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {EmployeesAddPersonComponent} from "./components/employees/employees-add-person/employees-add-person.component";

export const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: null,
    },
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    component: DashboardComponent,
  },
  {
    path: 'employees',
    data: {
      breadcrumb: 'Employees',
    },
    component: EmployeesComponent,
  },
  {
    path: 'employees/add-person',
    data: {
      breadcrumb: 'Add person',
    },
    component: EmployeesAddPersonComponent,
  },
  {
    path: 'company',
    data: {
      breadcrumb: 'Company',
    },
    component: CompanyComponent,
  },
  {
    path: 'calendar',
    data: {
      breadcrumb: 'Calendar',
    },
    component: CalendarComponent,
  },
  {
    path: 'leave',
    data: {
      breadcrumb: 'Leave',
    },
    component: LeaveComponent,
  },
  {
    path: 'review',
    data: {
      breadcrumb: 'Review',
    },
    component: ReviewComponent,
  },
  {
    path: 'report',
    data: {
      breadcrumb: 'Report',
    },
    component: ReportComponent,
  },
  {
    path: 'manage',
    data: {
      breadcrumb: 'Manage',
    },
    component: ManageComponent,
  },
  {
    path: 'settings',
    data: {
      breadcrumb: 'Settings',
    },
    component: SettingsComponent,
  },
  {
    path: 'profile',
    data: {
      breadcrumb: 'Profile',
    },
    component: ProfileComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
