import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: number[] | string[], direction: 'asc' | 'dsc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (direction == 'asc') {
        return a > b ? 1 : -1;
      }
      return a > b ? -1 : 1;
    });
    return sorted;
  }
}
