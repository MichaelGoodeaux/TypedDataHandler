const {
    isString,
    isNumber,
    isArray,
    isObject,
    isBoolean,
    isDate,
    isEmail,
    toNumber,
    capitalize,
    trimWhitespace,
  } = require('../src/dataHandler');
  
  describe('isString', () => {
    it('should return true for a string', () => {
      expect(isString('hello')).toBe(true);
    });
  
    it('should return false for a non-string value', () => {
      expect(isString(42)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString(['hello'])).toBe(false);
      expect(isString({ key: 'value' })).toBe(false);
    });
  });
  
  describe('isNumber', () => {
    it('should return true for a number', () => {
      expect(isNumber(42)).toBe(true);
    });
  
    it('should return false for a non-number value', () => {
      expect(isNumber('42')).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(['hello'])).toBe(false);
      expect(isNumber({ key: 'value' })).toBe(false);
    });
  });
  
  // Add similar test cases for isArray, isObject, isBoolean, isDate, isEmail, toNumber, capitalize, and trimWhitespace
  // ...  