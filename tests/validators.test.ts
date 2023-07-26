const {
    isPositiveNumber,
    isNonEmptyString,
    isValidUsername,
    isValidPassword,
  } = require('../src/validators');
  
  describe('isPositiveNumber', () => {
    it('should return true for a positive number', () => {
      expect(isPositiveNumber(42)).toBe(true);
      expect(isPositiveNumber(3.14)).toBe(true);
    });
  
    it('should return false for non-positive numbers', () => {
      expect(isPositiveNumber(0)).toBe(false);
      expect(isPositiveNumber(-10)).toBe(false);
      expect(isPositiveNumber('42')).toBe(false);
    });
  });
  
  describe('isNonEmptyString', () => {
    it('should return true for a non-empty string', () => {
      expect(isNonEmptyString('hello')).toBe(true);
    });
  
    it('should return false for an empty string', () => {
      expect(isNonEmptyString('')).toBe(false);
    });
  });
  
  describe('isValidUsername', () => {
    it('should return true for a valid username', () => {
      expect(isValidUsername('john_doe')).toBe(true);
    });
  
    it('should return false for an invalid username', () => {
      expect(isValidUsername('j')).toBe(false); // Too short
      expect(isValidUsername('username with spaces')).toBe(false); // Contains spaces
      expect(isValidUsername('username$withSpecialChars')).toBe(false); // Contains invalid characters
    });
  });
  
  describe('isValidPassword', () => {
    it('should return true for a valid password', () => {
      expect(isValidPassword('securep@ssword')).toBe(true);
    });
  
    it('should return false for an invalid password', () => {
      expect(isValidPassword('j')).toBe(false); // Too short
      expect(isValidPassword('password')).toBe(false); // No uppercase letter
      expect(isValidPassword('P@ssw0rd')).toBe(false); // No digit
    });
  });
  