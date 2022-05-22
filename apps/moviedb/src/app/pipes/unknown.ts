import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'unknown'
})
export class UnknownPipe implements PipeTransform {
  transform(value: string, replacement: string = 'Unknown'): string {
    return value === undefined || value === '' ? replacement : value
  }

}
