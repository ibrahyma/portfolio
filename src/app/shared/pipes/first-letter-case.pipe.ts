import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'firstlettercase'
})
export class FirstLetterCasePipe implements PipeTransform {

    transform(value: string): unknown {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

}
