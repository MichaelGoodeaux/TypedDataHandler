export function isString(value: any): boolean {
    return typeof value === 'string';
  }
  
  export function isNumber(value: any): boolean {
    return typeof value === 'number';
  }
  
  export function isArray(value: any): boolean {
    return Array.isArray(value);
  }
  
  export function isObject(value: any): boolean {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
  }
  
  export function isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
  
  export function isDate(value: any): boolean {
    return value instanceof Date;
  }
  
  export function isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function toNumber(value: string): number {
    return parseFloat(value);
  }
  
  export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  
  export function trimWhitespace(text: string): string {
    return text.trim();
  }
  