Calculator - String Addition
This project is a TypeScript-based calculator that adds numbers provided as a string. It supports custom delimiters, handles new lines between numbers, and throws exceptions for negative numbers and invalid inputs.

||******************************************************************************************************************************||

Features -

1. Empty String: Returns 0 for an empty string.
2. Single Number: Returns the number itself if only one number is provided.
3. Multiple Numbers: Returns the sum of multiple comma-separated numbers.
4. New Lines: Handles new lines (\n) between numbers.
5. Custom Delimiters: Supports custom delimiters specified in the input string.
6. Negative Numbers: Throws an exception if any negative numbers are provided.
7. Invalid Input: Throws an error if the input contains invalid numbers.
8. Large Numbers: Handles large numbers without issues.

||******************************************************************************************************************************||

Prerequisites -

Before running the project, ensure you have the following installed:

1. Node.js (v14 or higher)
2. npm (usually comes with Node.js)

||******************************************************************************************************************************||

Installation -

1. Clone the repository - Branch Name : master
2. Install dependencies: npm install

||******************************************************************************************************************************||

Running the Tests - 

This project uses Jest for testing. To run the tests, use the following command:

1. npm test

||******************************************************************************************************************************||

Project Structure - 

1. calculator.tsx: Contains the add function implementation.
2. calculator.test.ts: Contains the test cases for the add function.

||******************************************************************************************************************************||