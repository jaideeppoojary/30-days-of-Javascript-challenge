
const { getPadString } = require("./utils");
// Day 2: Operators

// Tasks/Activities:
// Activity 1: Arithmetic Operations
console.log(getPadString("Activity 1", '-'));
console.log(getPadString("Task 1"), '\n');
// Task 1: Write a program to add two numbers and log the result to the console.
const num1 = 5;
const num2 = 11;
console.log("[>] num1 : ", num1);
console.log("[>] num2 : ", num2);
const sum = num1 + num2;
console.log("[>] sum : ", sum);

console.log(getPadString("Task 2"), '\n');
// Task 2: Write a program to subtract two numbers and log the result to the console.
const sub = num2 - num1;
console.log("[>] sub : ", sub);

console.log(getPadString("Task 3"), '\n');
// Task 3: Write a program to multiply two numbers and log the result to the console.
const mul = num1 * num2;
console.log("[>] mul : ", mul);

console.log(getPadString("Task 4"), '\n');
// Task 4: Write a program to divide two numbers and log the result to the console.
const div = num2 / num1;
console.log("[>] div : ", div);

console.log(getPadString("Task 5"), '\n');
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const rem = num2 % num1;
console.log("[>] rem : ", rem);

// Activity 2: Assignment Operators
console.log('\n', getPadString("Activity 2", '-'));
console.log(getPadString("Task 6"), '\n');
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let num3 = 2;
console.log("[>] num3 : ", num3);
num3 += 3;
console.log("[>] num3 : ", num3);

console.log(getPadString("Task 7"), '\n');
// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let num4 = 10;
console.log("[>] num4 : ", num4);
num4 -= 5;
console.log("[>] num4 : ", num4);

// Activity 3: Comparison Operators
console.log('\n', getPadString("Activity 3", '-'));

console.log(getPadString("Task 8"), '\n');
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log("[>] num1 : ", num1);
console.log("[>] num2 : ", num2);
console.log("[>] num1 > num2 : ", num1 > num2);
console.log("[>] num1 < num2 : ", num1 < num2);

console.log(getPadString("Task 9"), '\n');
// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("[>] num1 >= num2 : ", num1 >= num2);
console.log("[>] num1 <= num2 : ", num1 <= num2);

console.log(getPadString("Task 10"), '\n');
// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("[>] num1 == num2 : ", num1 == num2);
console.log("[>] num1 === num2 : ", num1 === num2);

// Activity 4: Logical Operators
console.log('\n', getPadString("Activity 4", '-'));

console.log(getPadString("Task 11"), '\n');
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
const condition1 = true;
const condition2 = false;
console.log("[>] condition1 : ", condition1);
console.log("[>] condition2 : ", condition2);
console.log("[>] condition1 && condition2 : ", condition1 && condition2);

console.log(getPadString("Task 12"), '\n');
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log("[>] condition1 || condition2 : ", condition1 || condition2);

console.log(getPadString("Task 13"), '\n');
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("[>] !condition1 : ", !condition1);
console.log("[>] !condition2 : ", !condition2);

// Activity 5: Ternary Operator
console.log('\n', getPadString("Activity 5", '-'));

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
const number = -5;
console.log("[>] number : ", number);
const result = number >= 0 ? "Positive" : "Negative";
console.log("[>] result : ", result);

// Feature Request:
console.log('\n', getPadString("Feature Request 1:", '-'));
console.log("[>] num1 : ", num1);
console.log("[>] num2 : ", num2);
console.log("[>] sum : ", sum);
console.log("[>] sub : ", sub);
console.log("[>] mul : ", mul);
console.log("[>] div : ", div);
console.log("[>] rem : ", rem);
console.log("[>] num3 : ", num3);
console.log("[>] num4 : ", num4);
console.log('\n', getPadString("Feature Request 2:", '-'));
console.log("[>] num1 > num2 : ", num1 > num2);
console.log("[>] num1 < num2 : ", num1 < num2);
console.log("[>] num1 >= num2 : ", num1 >= num2);
console.log("[>] num1 <= num2 : ", num1 <= num2);
console.log("[>] num1 == num2 : ", num1 == num2);
console.log("[>] num1 === num2 : ", num1 === num2);
console.log('\n', getPadString("Feature Request 3:", '-'));
console.log("[>] condition1 : ", condition1);
console.log("[>] condition2 : ", condition2);
console.log("[>] condition1 && condition2 : ", condition1 && condition2);
console.log("[>] condition1 || condition2 : ", condition1 || condition2);
console.log("[>] !condition1 : ", !condition1);
console.log("[>] !condition2 : ", !condition2);
console.log("[>] number : ", number);
console.log("[>] result : ", result);



// Achievement:
// * Understand and use arithmetic operators to perform basic calculations.
// * Use assignment operators to modify variable values.
// * Compare values using comparison operators.
// * Combine conditions using logical operators.
// * Use the ternary operator for concise conditional expressions.

