import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardPipe',
  standalone: true
})
export class CreditCardPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(.{4})/g,'$1-');
  }

}
