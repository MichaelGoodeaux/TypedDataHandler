# TypedDataHandler/src

This folder contains the TypeScript source code for the "TypedDataHandler" library. This library is a TypeScript utility that provides functions for handling and validating various data types, as well as data formatting and serialization.

## File Structure

This folder has the following files:

* dataHandler.ts: Contains functions for type validation, email validation, and data conversion (e.g., toNumber, capitalize, and trimWhitespace).

* validators.ts: Includes custom validators for specific data types, such as positive numbers, non-empty strings, valid usernames, and valid passwords.

* formatters.ts: Contains functions for data formatting, such as formatting numbers and dates, as well as serialization and deserialization of JSON data.

* index.ts: Acts as the main entry point for the library, exporting all the functions and classes that users can use.

## Usage

To use the "TypedDataHandler" library in your TypeScript project, you can import the functions or classes from this folder as follows:

```typescript
import {
  isString,
  isNumber,
  isArray,
  // ... other functions ...
} from './src';

// Use the functions as needed
const result = isString('hello');

```

## Contributing

We welcome contributions to the "TypedDataHandler" library. If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request on our GitHub repository.

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

## License
This project is open-source and available under the [MIT License](https://opensource.org/license/mit/).