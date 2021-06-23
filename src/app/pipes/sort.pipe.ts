import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(products: any, fieldName: string) {
    let sortFieldSelected = fieldName;
    let sortField = sortFieldSelected.split('|');
    products.sort((a: any, b: any) => {
      if (sortField[1] == 'asc' || sortField[1] == 'lth') {
        if (a[sortField[0]] < b[sortField[0]]) {
          return -1;
        } else if (a[sortField[0]] > b[sortField[0]]) {
          return 1;
        } else {
          return 0;
        }
      } else if (sortField[1] == 'desc' || sortField[1] == 'htl') {
        if (a[sortField[0]] > b[sortField[0]]) {
          return -1;
        } else if (a[sortField[0]] < b[sortField[0]]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[sortField[0]] < b[sortField[0]]) {
          return -1;
        } else if (a[sortField[0]] > b[sortField[0]]) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    return products;
  }
}
