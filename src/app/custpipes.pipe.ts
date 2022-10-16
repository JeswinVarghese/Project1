import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipes'
})
export class CustpipesPipe implements PipeTransform {

  transform(value: string, name:string): string {
    return "firstname"+ name;
  }

}
