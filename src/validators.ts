export function isPositiveNumber(value: any): boolean {
    return typeof value === 'number' && value > 0;
  }
  
  export function isNonEmptyString(value: any): boolean {
    return typeof value === 'string' && value.trim() !== '';
  }
  
  export function isValidUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
  }
  
  export function isValidPassword(password: string): boolean {
    // Add your password validation logic here (e.g., minimum length, special characters, etc.)
    return password.length >= 8;
  }
  