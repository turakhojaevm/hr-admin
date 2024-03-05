import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastMenu',
  standalone: true
})
export class LastMenuPipe implements PipeTransform {

  transform(menu: any): string {
    return menu?.at(-1).label;
  }

}
