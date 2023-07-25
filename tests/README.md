# TypedDataHandler/tests

This folder contains the test suite for the "TypedDataHandler" library. The test suite is built using the Jest testing framework to ensure the correctness and reliability of the library functions.

## File Structure

The test suite is organized into separate test files, each corresponding to a module in the "src" folder. The individual test files are:

dataHandler.test.ts: Contains test cases for the functions in "dataHandler.ts" that handle type validation, email validation, and data conversion.

validators.test.ts: Includes test cases for the functions in "validators.ts" that validate custom data types.

formatters.test.ts: Contains test cases for the functions in "formatters.ts" that handle data formatting and serialization.

index.test.ts: Includes test cases for the functions exported by the "index.ts" file, ensuring that they function correctly and can be used as intended.

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

## Contributing

Contributions to the test suite are valuable in ensuring the stability of the "TypedDataHandler" library. If you find any bugs, discrepancies, or want to add more test cases, feel free to open an issue or submit a pull request on our GitHub repository.

## License
This project is open-source and available under the [MIT License](https://opensource.org/license/mit/).