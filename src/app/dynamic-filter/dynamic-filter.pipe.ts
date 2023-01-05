import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicFilter'
})
export class DynamicFilterPipe implements PipeTransform {

  transform(items: any[], args: { filterText: string, field: string }): any[] {
    if (!items) {
      return [];
    }
    if (!args.filterText) {
      return items;
    }
    const fields = args.field.split(',');
    return items.filter(item => {
      for (const field of fields) {
        const fieldValue = this.getFieldValue(item, field);
        if (fieldValue && fieldValue.toLocaleLowerCase().includes(args.filterText.toLocaleLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }

  private getFieldValue(obj: any, field: string): string | undefined {
    const fields = field.split('.');
    let current = obj;
    for (const field of fields) {
      if (current[field]) {
        current = current[field];
      } else {
        return undefined;
      }
    }
    return current.toString();
  }
}
