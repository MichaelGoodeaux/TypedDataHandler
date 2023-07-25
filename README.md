# TypedDataHandler

[![npm version](https://badge.fury.io/js/typed-data-handler.svg)](https://badge.fury.io/js/typed-data-handler)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/MichaelGoodeaux/TypedDataHandler/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/MichaelGoodeaux/TypedDataHandler/tree/main)

TypedDataHandler is a TypeScript utility library that simplifies handling and validating various data types, including strings, numbers, dates, email addresses, and more. It provides functions and classes to perform common data manipulations, validations, conversions, and formatting.

## Installation

To use TypedDataHandler in your TypeScript project, install it via npm:

```bash
npm install typed-data-handler
```

## Features
* Type Validation: Validate data against common types, such as strings, numbers, booleans, arrays, objects, and dates.
* Email Validation: Validate email addresses to ensure they follow the correct format.
* Data Conversion: Convert data from one type to another, e.g., string to number, parsing JSON data, or formatting dates.
* String Manipulation: Utility functions to manipulate strings, like capitalizing the first letter, trimming whitespace, or extracting substrings.
* Data Formatting: Functions to format data, such as formatting numbers with a specified number of decimal places or formatting dates in a specific format.
* Data Parsing: Parse data from strings into appropriate data types, like parsing dates from strings or converting comma-separated values into arrays.
* Data Serialization: Methods to serialize and deserialize data, making it easier to store and retrieve data from different sources.
* Custom Validators: Define custom validation rules and add them to the library.

## Usage

```typescript
import { isEmail, formatDate, toNumber, capitalize } from 'typed-data-handler';

const email = 'example@example.com';
if (isEmail(email)) {
  console.log('Valid email address');
} else {
  console.log('Invalid email address');
}

const date = new Date();
const formattedDate = formatDate(date, 'yyyy-MM-dd');
console.log(`Formatted date: ${formattedDate}`);

const numberString = '42';
const numberValue = toNumber(numberString);
console.log(`Parsed number: ${numberValue}`);

const text = 'hello world';
const capitalizedText = capitalize(text);
console.log(`Capitalized text: ${capitalizedText}`);
```

## Contributing
Contributions are welcome! If you encounter any issues or have ideas for improvements, please open an issue or submit a pull request. Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License
This project is open-source and available under the [MIT License](https://opensource.org/license/mit/).

## Test Instructions

The "TypedDataHandler" library includes test suites to ensure its functionality and reliability. To run the tests locally, follow these steps:

**Install Dependencies:**

   Before running the tests, make sure you have all the required dependencies installed. If you haven't done so already, install the project dependencies by running:

   ```bash
   npm install
```

**Run Tests Locally**

To execute the test suite, use the following command in your terminal:
```bash
npm test
```
The test runner (Jest) will automatically find and run all the test files located in the tests folder.

**View Test Results**

After running the tests, Jest will display the test results in the terminal. You should see a list of test cases along with their status (passed or failed).

Additionally, Jest will generate a coverage report to show how much of your code is covered by the tests. You can find the coverage report in the coverage folder after running the tests.
