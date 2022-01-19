import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc'
})
export class TtcPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {

    return null;
  }

}
