export function formatNumber(value: number, decimalPlaces: number = 2): string {
    return value.toFixed(decimalPlaces);
  }
  
  export function formatDate(date: Date, format: string = 'yyyy-MM-dd'): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
  
    return format
      .replace('yyyy', year)
      .replace('MM', month)
      .replace('dd', day);
  }
  
  export function serializeData(data: any): string {
    return JSON.stringify(data);
  }
  
  export function deserializeData(jsonString: string): any {
    return JSON.parse(jsonString);
  }
  