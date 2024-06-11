import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
    name: 'customDate',
    standalone: true
})
export class CustomDatePipe implements PipeTransform {
    transform(value: any, format: string = 'dd.MM.YY'): string | null {
        if (!value) return null;
        return formatDate(value, format, 'en-US');
    }
}
