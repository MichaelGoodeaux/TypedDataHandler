// Import all functions and classes from the other files
import {
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
  } from './dataHandler';
  
  import {
    isPositiveNumber,
    isNonEmptyString,
    isValidUsername,
    isValidPassword,
  } from './validators';
  
  import {
    formatNumber,
    formatDate,
    serializeData,
    deserializeData,
  } from './formatters';
  
  // Export all the functions and classes as a single object
  export {
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
    isPositiveNumber,
    isNonEmptyString,
    isValidUsername,
    isValidPassword,
    formatNumber,
    formatDate,
    serializeData,
    deserializeData,
  };
  