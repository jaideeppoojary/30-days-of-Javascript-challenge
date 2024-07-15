
const { getPadString } = require("./utils");
// Day 3: Control Structures

// Tasks/Activities:
// Activity 1: If-Else Statements
console.log(getPadString("Activity 1", '-'));

console.log(getPadString("Task 1"), '\n');
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const num = 5;
console.log("[>] num : ", num);
console.log("[>] ", num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");
// if (num > 0) {
//     console.log("[>] Positive");
// } else if (num < 0) {
//     console.log("[>] Negative");
// } else {
//     console.log("[>] Zero");
// }

console.log(getPadString("Task 2"), '\n');
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const age = 17;
console.log("[>] age : ", age);
console.log("[>] ", age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote");
// if (age >= 18) {
//     console.log("[>] Eligible to Vote");
// } else {
//     console.log("[>] Not Eligible to Vote");
// }

// Activity 2: Nested If-Else Statements
{/* <ul> 
    <li><strong>Task 3:</strong> Write a program to find the largest of three numbers using nested if-else statements.</li> 
   </ul> */}
console.log('\n', getPadString("Activity 2", '-'));
console.log(getPadString("Task 3"), '\n');
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const num1 = 5;
const num2 = 11;
const num3 = 7;
console.log("[>] num1 : ", num1);
console.log("[>] num2 : ", num2);
console.log("[>] num3 : ", num3);
if (num1 > num2 && num1 > num3) {
    console.log("[>] num1 is the largest");
} else if (num2 > num1 && num2 > num3) {
    console.log("[>] num2 is the largest");
} else {
    console.log("[>] num3 is the largest");
}

// Activity 3: Switch Case
console.log('\n', getPadString("Activity 3", '-'));

console.log(getPadString("Task 4"), '\n');
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const day = 3;
console.log("[>] day : ", day);
switch (day) {
    case 1:
        console.log("[>] Sunday");
        break;
    case 2:
        console.log("[>] Monday");
        break;
    case 3:
        console.log("[>] Tuesday");
        break;
    case 4:
        console.log("[>] Wednesday");
        break;
    case 5:
        console.log("[>] Thursday");
        break;
    case 6:
        console.log("[>] Friday");
        break;
    case 7:
        console.log("[>] Saturday");
        break;
    default:
        console.log("[>] Invalid day");
}

console.log(getPadString("Task 5"), '\n');
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
const score = 75;
console.log("[>] score : ", score);
let grade;
switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log("[>] grade : ", grade);

// Activity 4: Conditional (Ternary) Operator
console.log('\n', getPadString("Activity 4", '-'));
console.log(getPadString("Task 6"), '\n');
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const number = 5;
console.log("[>] number : ", number);
console.log("[>] ", number % 2 === 0 ? "Even" : "Odd");

// Activity 5: Combining Conditions

console.log('\n', getPadString("Activity 5", '-'));
console.log(getPadString("Task 7"), '\n');
// Task 7: Write a program to check if a year is a leap year using multiple conditions and log the result to the console.
const year = 2020;
console.log("[>] year : ", year);
console.log("[>] ", (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year" : "Not a Leap Year");



// Feature Request:
console.log('\n', getPadString("Feature Request 1:", '-'));

console.log("[>] num : ", num);
console.log("[>] age : ", age);
console.log("[>] day : ", day);
console.log("[>] score : ", score);
console.log("[>] number : ", number);
console.log("[>] year : ", year);


// Achievement:
// * Implement and understand basic if-else control flow.
// * Use nested if-else statements to handle multiple conditions.
// * Utilize switch cases for control flow based on specific values.
// * Apply the ternary operator for concise condition checking.
// * Combine multiple conditions to solve more complex problems.

