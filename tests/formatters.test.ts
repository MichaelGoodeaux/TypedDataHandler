import {
    formatNumber,
    formatDate,
    serializeData,
    deserializeData,
  } from '../src/formatters';
  
  describe('formatNumber', () => {
    it('should format a number with the default decimal places', () => {
      expect(formatNumber(42.12345)).toBe('42.12');
    });
  
    it('should format a number with a specified number of decimal places', () => {
      expect(formatNumber(42.12345, 4)).toBe('42.1235');
    });
  });
  
  describe('formatDate', () => {
    it('should format a date to the default format', () => {
      const date = new Date('2023-07-24');
      expect(formatDate(date)).toBe('2023-07-24');
    });
  
    it('should format a date to a custom format', () => {
      const date = new Date('2023-07-24');
      expect(formatDate(date, 'MM/dd/yyyy')).toBe('07/24/2023');
    });
  });
  
  describe('serializeData', () => {
    it('should serialize an object to a JSON string', () => {
      const data = { key: 'value', number: 42, nested: { prop: 'nested value' } };
      const jsonString = '{"key":"value","number":42,"nested":{"prop":"nested value"}}';
      expect(serializeData(data)).toBe(jsonString);
    });
  });
  
  describe('deserializeData', () => {
    it('should deserialize a JSON string to an object', () => {
      const jsonString = '{"key":"value","number":42,"nested":{"prop":"nested value"}}';
      const data = { key: 'value', number: 42, nested: { prop: 'nested value' } };
      expect(deserializeData(jsonString)).toEqual(data);
    });
  });
  