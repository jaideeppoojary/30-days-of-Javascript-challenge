
const { getPadString } = require("./utils");
// reference for suggestion https://streaming-cdnv6.learnyst.com/v6/schools/171024/articlelesson/198890/3196994/un5v19251a60766d2f/ndrm/sth/index.html
// Day 1: Variables and Data Types

// Tasks/Activities:
// Activity 1: Variable Declaration
console.log(getPadString("Activity 1", '-'));
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
console.log(getPadString("Task 1"), '\n');
var ratting = 5;
console.log("[>] ratting: ", ratting);
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
console.log(getPadString("Task 2"), '\n');
let challengeAcceptedBy = "Jaideep";
let userGithubAccount = "https://github.com/jaideeppoojary";
console.log("[>] challengeAcceptedBy : ", challengeAcceptedBy);
console.log("[>] userGithubAccount : ", userGithubAccount);

// Activity 2: Constant Declaration
console.log('\n', getPadString("Activity 2", '-'));
// Task 1: Declare a constant using const, , assign it a boolean value, and log the value to the console.
console.log(getPadString("Task 3"), '\n');
const isChallengeAccepted = true;
console.log("[>] isChallengeAccepted : ", isChallengeAccepted);

//Activity 3: Data Types
console.log('\n', getPadString("Activity 3", '-'));
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
console.log(getPadString("Task 4"), '\n');
const rattingNumber = 5;
const challengeName = "Started 30 days of JavaScript challenge";
const boolean = true;
const user = { name: "Jaideep", challengeStarted: true};
const topicsInterested = ['These type of challenges', { enjoys: 'To be part of this community'}, true, 5];
console.log("[>] typeof ratting : ", typeof ratting);
console.log("[>] typeof challengeName : ", typeof challengeName);
console.log("[>] typeof boolean : ", typeof boolean);
console.log("[>] typeof user : ", typeof user);
console.log("[>] typeof topicsInterested : ", typeof topicsInterested);
console.log("[>] value: ratting : ",  ratting);
console.log("[>] value: challengeName : ",  challengeName);
console.log("[>] value: boolean : ",  boolean);
console.log("[>] value: user : ",  user);
console.log("[>] value: topicsInterested : ",  topicsInterested);

// Activity 4: Reassigning Variables
console.log('\n', getPadString("Activity 4", '-'));
// Task 5:  Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
console.log(getPadString("Task 5"), '\n');
let challengeDay = 1;
console.log("[>] challengeDay : ", challengeDay);
challengeDay = 2;
console.log("[>] After Reassign 'challengeDay' : ", challengeDay);

// Activity 5: Understanding const
console.log('\n', getPadString("Activity 5", '-'));
// Task 6:  Try reassigning a variable declared with const and observe the error.
console.log(getPadString("Task 6"), '\n');
const challengeDayConst = 1;
console.log("[>] challengeDayConst : ", challengeDayConst);
// challengeDayConst = 2; // Error: Assignment to constant variable.

// Feature Request:
// 1: Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
console.log('\n', getPadString("Feature Request 1:", '-'));
console.log("[>] typeof ratting : ", typeof ratting);
console.log("[>] typeof challengeName : ", typeof challengeName);
console.log("[>] typeof boolean : ", typeof boolean);
console.log("[>] typeof user : ", typeof user);
console.log("[>] typeof topicsInterested : ", typeof topicsInterested);
console.log("[>] value: ratting : ",  ratting);
console.log("[>] value: challengeName : ",  challengeName);
console.log("[>] value: boolean : ",  boolean);
console.log("[>] value: user : ",  user);
console.log("[>] value: topicsInterested : ",  topicsInterested);

// 2: Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
console.log('\n', getPadString("Feature Request 2:", '-'));
const feature2Const = '100%';
console.log("[>] feature2Const : ", feature2Const);
// feature2Const = '50%'; // Error: Assignment to constant variable.
console.log('Error: Assignment to constant variable.');

// Achievement:
// * Know how to declare variables using `var`, `let`, and `const`.
// * Understand the different data types in JavaScript.
// * Be able to use the `typeof` operator to identify the data type of a variable.
// * Understand the concept of variable reassignment and the immutability of `const` variables.

