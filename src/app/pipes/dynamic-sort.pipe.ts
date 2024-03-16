import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicSort'
})
export class DynamicSortPipe implements PipeTransform {

  transform(array: any[], key: string, direction: 'asc' | 'desc'): any[] {
    if (!array || !key || !direction) {
      return array;
    }

    return array.sort((a, b) => {
      const valueA = typeof a[key] === 'number' ? a[key] : 0;
      const valueB = typeof b[key] === 'number' ? b[key] : 0;

      let comparison = 0;
      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }

      return direction === 'asc' ? comparison : -comparison;
    });
  }

}
