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
    // Check for minimum length, special characters, no uppercase letter, and no digit
      const hasMinimumLength: boolean = password.length >= 8;
      const hasSpecialCharacter: boolean = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(password);
      const hasNoDigit: boolean = /\d/.test(password);
    
      // Combine all the conditions
      return hasMinimumLength && hasSpecialCharacter && !hasNoDigit;
    }
  