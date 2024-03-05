import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/header/header.component";
import {SidebarComponent} from "./core/sidebar/sidebar.component";
import {BreadcrumbComponent} from "./core/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hr-admin';
}
