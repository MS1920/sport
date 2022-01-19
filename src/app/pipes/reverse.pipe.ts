import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let ch = value.split("");
    value = "";
    for (let i = 0; i < ch.length; i++) {
      value = ch[i] + value;
    }

    return value;
  }

}
