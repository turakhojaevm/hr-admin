import {Component, ViewEncapsulation} from '@angular/core';
import {Route} from "../../models/routes";
import {MenuModule} from "primeng/menu";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MenuModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  public routes: Route[] = [
    {
      routerLink: 'dashboard',
      label: 'Dashboard',
      icon: 'pi pi-home',
    },
    {
      routerLink: 'employees',
      label: 'Employees',
      icon: 'pi pi-users',
    },
    {
      routerLink: 'company',
      label: 'Company',
      icon: 'pi pi-building',
    },
    {
      routerLink: 'calendar',
      label: 'Calendar',
      icon: 'pi pi-calendar',
    },
    {
      routerLink: 'leave',
      label: 'Leave',
      icon: 'pi pi-sign-out',
    },
    {
      routerLink: 'review',
      label: 'Review',
      icon: 'pi pi-user-plus',
    },
    {
      routerLink: 'report',
      label: 'Report',
      icon: 'pi pi-book',
    },
    {
      routerLink: 'manage',
      label: 'Manage',
      icon: 'pi pi-chart-pie',
    },
    {
      routerLink: 'settings',
      label: 'Settings',
      icon: 'pi pi-cog',
    },
    {
      routerLink: 'profile',
      label: 'Profile',
      icon: 'pi pi-user',
    },
  ];

}
