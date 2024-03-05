import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {MenuItem} from "primeng/api";
import {isNullOrUndefined} from "../helpers/isNullOrUndefined";
import {LastMenuPipe} from "../pipes/last-menu.pipe";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    BreadcrumbModule,
    LastMenuPipe
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent implements OnInit {

  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  menuItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuItems = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  private createBreadcrumbs(route: ActivatedRoute, routerLink: string = '', breadcrumbs: MenuItem[] = []): any {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        routerLink += `/${routeURL}`;
      }

      const label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
      if (!isNullOrUndefined(label)) {
        breadcrumbs.push({label, routerLink});
      }
      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    }
  }

}
