import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toDate',
})
export class ToDatePipe implements PipeTransform {
  transform(value: any, ...args: string[]): unknown {
    return moment(value).format(args[0]);
  }
}
