import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true,
  pure: false
})
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
