import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixed'
})
export class FixedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Number(value).toFixed(2);
  }

}
