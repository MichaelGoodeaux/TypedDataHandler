import * as TypedDataHandler from '../src/index';

describe('TypedDataHandler', () => {
  describe('Data type validation', () => {
    it('should correctly validate data types', () => {
      expect(TypedDataHandler.isString('hello')).toBe(true);
      expect(TypedDataHandler.isNumber(42)).toBe(true);
      expect(TypedDataHandler.isArray([1, 2, 3])).toBe(true);
      expect(TypedDataHandler.isObject({ key: 'value' })).toBe(true);
      expect(TypedDataHandler.isBoolean(true)).toBe(true);
      expect(TypedDataHandler.isDate(new Date())).toBe(true);
    });

    it('should return false for incorrect data types', () => {
      expect(TypedDataHandler.isString(42)).toBe(false);
      expect(TypedDataHandler.isNumber('42')).toBe(false);
      expect(TypedDataHandler.isArray({ key: 'value' })).toBe(false);
      expect(TypedDataHandler.isObject([1, 2, 3])).toBe(false);
      expect(TypedDataHandler.isBoolean('true')).toBe(false);
      expect(TypedDataHandler.isDate('2023-07-24')).toBe(false);
    });
  });

  describe('Email validation', () => {
    it('should correctly validate email addresses', () => {
      expect(TypedDataHandler.isEmail('hello@example.com')).toBe(true);
      expect(TypedDataHandler.isEmail('user.name@example.co.uk')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(TypedDataHandler.isEmail('not_an_email')).toBe(false);
      expect(TypedDataHandler.isEmail('invalid@')).toBe(false);
      expect(TypedDataHandler.isEmail('example.com')).toBe(false);
    });
  });

  // Add tests for other functions in index.ts
  // ...

});
