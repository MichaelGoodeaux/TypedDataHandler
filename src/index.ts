// Import all functions and classes from the other files
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
  } = require('./dataHandler');
  
  const {
    isPositiveNumber,
    isNonEmptyString,
    isValidUsername,
    isValidPassword,
  } = require('./validators');
  
  const {
    formatNumber,
    formatDate,
    serializeData,
    deserializeData,
  } = require('./formatters');
  
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
  