import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let ch = value.split("");
    value = "";
    for (let i = 0; i < ch.length; i++) {
      if (ch[i] == " ") {
        ch[i] = "_";
      }
      value = value + ch[i];
    }

    return value;
  }

}
