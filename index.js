#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
// Define a function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.log(chalk.bold.yellow.italic("\n+++++++ 'WELCOME TO SHAHI TYPESCRIPT QUIZ PROGRAMME' +++++++\n"));
console.log(chalk.bold.blackBright.italic("\n Note: The quiz consists of 20 questions, with a total of 100 marks, and each question is worth 5 marks.\n"));
let marks = 0;
const questions = [
    {
        type: 'list',
        name: 'question1',
        message: chalk.bold.magenta("What is TypeScript?"),
        choices: [
            "A database management system.",
            "A framework for building web applications.",
            "A superset of JavaScript that adds static types.",
            "A stylesheet language for web pages."
        ],
        correctAnswer: "A superset of JavaScript that adds static types."
    },
    {
        type: 'list',
        name: 'question2',
        message: chalk.bold.magenta("How do you declare a variable with a specific type in TypeScript?"),
        choices: [
            "var variableName = type;",
            "const variableName as type;",
            "let variableName: type;",
            "let variableName = new type;"
        ],
        correctAnswer: "let variableName: type;"
    },
    {
        type: 'list',
        name: 'question3',
        message: chalk.bold.magenta("What command do you use to compile a TypeScript file?"),
        choices: [
            "compile filename.ts",
            "ts-compile filename.ts",
            "tsc filename.ts",
            "ts-run filename.ts"
        ],
        correctAnswer: "tsc filename.ts"
    },
    {
        type: 'list',
        name: 'question4',
        message: chalk.bold.magenta("How do you specify an array of numbers in TypeScript?"),
        choices: [
            "let numbers: [number] = [1, 2, 3];",
            "let numbers = new number[1, 2, 3];",
            "let numbers = number[];",
            "let numbers: number[] = [1, 2, 3];",
        ],
        correctAnswer: "let numbers: number[] = [1, 2, 3];"
    },
    {
        type: 'list',
        name: 'question5',
        message: chalk.bold.magenta("What is the purpose of the `interface` keyword in TypeScript?"),
        choices: [
            "To define a contract for objects.",
            "To declare a new module.",
            "To create a new function.",
            "To specify a type for variables."
        ],
        correctAnswer: "To define a contract for objects."
    },
    {
        type: 'list',
        name: 'question6',
        message: chalk.bold.magenta("How do you make a property optional in a TypeScript interface?"),
        choices: [
            "By using the `optional` keyword.",
            "By wrapping the property name in parentheses.",
            "By prefixing the property name with an underscore.",
            "By adding a question mark after the property name.",
        ],
        correctAnswer: "By adding a question mark after the property name."
    },
    {
        type: 'list',
        name: 'question7',
        message: chalk.bold.magenta("What is the use of `readonly` in TypeScript?"),
        choices: [
            "To declare a global variable.",
            "To define a constant.",
            "To import a module.",
            "To make a property immutable.",
        ],
        correctAnswer: "To make a property immutable."
    },
    {
        type: 'list',
        name: 'question8',
        message: chalk.bold.magenta("What is the purpose of using enum in TypeScript?"),
        choices: [
            "To create a new type.",
            "To define a set of named constants.",
            "To enforce strict type checking.",
            "To organize code into modules."
        ],
        correctAnswer: "To define a set of named constants."
    },
    {
        type: 'list',
        name: 'question9',
        message: chalk.bold.magenta("How do you define a tuple type in TypeScript?"),
        choices: [
            "let tuple: string, number;",
            "let tuple = [string, number];",
            "let tuple: [string, number];",
            "let tuple: (string, number);"
        ],
        correctAnswer: "let tuple: [string, number];"
    },
    {
        type: 'list',
        name: 'question10',
        message: chalk.bold.magenta("Which of the following TypeScript types allows a variable to hold multiple types?"),
        choices: [
            "Intersection type",
            "Union type",
            "Enum type",
            "Composite type"
        ],
        correctAnswer: "Union type"
    },
    {
        type: 'list',
        name: 'question11',
        message: chalk.bold.magenta("What is the primary benefit of using TypeScript over JavaScript?"),
        choices: [
            "Improved performance",
            "Static type checking",
            "Increased security",
            "Smaller code size"
        ],
        correctAnswer: "Static type checking"
    },
    {
        type: 'list',
        name: 'question12',
        message: chalk.bold.magenta("How do you define a simple function with a string parameter and a void return type in TypeScript?"),
        choices: [
            "function greet(name: string) {}",
            "function greet(name = 'World'): string {}",
            "const greet = (name: string) => {}",
            "function greet(name: string): void {}",
        ],
        correctAnswer: "function greet(name: string): void {}"
    },
    {
        type: 'list',
        name: 'question13',
        message: chalk.bold.magenta("Which of the following is NOT a valid way to declare an interface in TypeScript?"),
        choices: [
            "interface User { name: string; age: number; }",
            "type User = { name: string; age: number; }",
            "class User { name: string; age: number; }",
            "const user: { name: string; age: number; } = {}"
        ],
        correctAnswer: "class User { name: string; age: number; }"
    },
    {
        type: 'list',
        name: 'question14',
        message: chalk.bold.magenta("What does the `any` type in TypeScript represent?"),
        choices: [
            "A specific data type",
            "A primitive type",
            "A variable that can hold any data type",
            "A way to define an array"
        ],
        correctAnswer: "A variable that can hold any data type"
    },
    {
        type: 'list',
        name: 'question15',
        message: chalk.bold.magenta("How can you access a property of an object declared using an interface in TypeScript?"),
        choices: [
            "const user = { name: 'Ali' }; console.log(user.name);",
            "interface User { name: string; } const user = new User(); console.log(user.name);",
            "You cannot access properties of interface objects directly.",
            "interface User { name: string; } const user: User = { name: 'Ali' }; console.log(user.name);",
        ],
        correctAnswer: "interface User { name: string; } const user: User = { name: 'Ali' }; console.log(user.name);"
    },
    {
        type: 'list',
        name: 'question16',
        message: chalk.bold.magenta("What is the difference between `===` and `==` operators in TypeScript?"),
        choices: [
            "Both perform the same comparison.",
            "=== is for strict equality, == is for loose equality.",
            "=== is for comparing objects, == is for comparing primitives.",
            "=== is for strings, == is for numbers."
        ],
        correctAnswer: "=== is for strict equality, == is for loose equality."
    },
    {
        type: 'list',
        name: 'question17',
        message: chalk.bold.magenta("How can you define an optional property in an interface in TypeScript?"),
        choices: [
            "interface User { name: string | undefined; }",
            "interface User { age: number; if (condition) { name: string; } }",
            "You cannot define optional properties in interfaces.",
            "interface User { name: string; age?: number; }",
        ],
        correctAnswer: "interface User { name: string; age?: number; }"
    },
    {
        type: 'list',
        name: 'question18',
        message: chalk.bold.magenta("What is the purpose of the `namespace` keyword in TypeScript?"),
        choices: [
            "To define a new data type",
            "To organize code and avoid naming conflicts",
            "To create a class",
            "To improve performance"
        ],
        correctAnswer: "To organize code and avoid naming conflicts"
    },
    {
        type: 'list',
        name: 'question19',
        message: chalk.bold.magenta("What is the difference between a class and an interface in TypeScript?"),
        choices: [
            "They are the same thing.",
            "Classes define objects, interfaces define contracts.",
            "Classes are for inheritance, interfaces are for composition.",
            "Interfaces are for primitive types, classes are for complex types."
        ],
        correctAnswer: "Classes define objects, interfaces define contracts."
    },
    {
        type: 'list',
        name: 'question20',
        message: chalk.bold.magenta("Which of the following is a valid way to iterate over an array in TypeScript?"),
        choices: [
            "for (item in array) { ... }",
            "forEach(item => { ... })",
            "for (let i = 0; i < array.length; i++) { ... }",
            "while (array.length > 0) { ... }"
        ],
        correctAnswer: "for (let i = 0; i < array.length; i++) { ... }"
    }
];
// Shuffle the questions
const shuffledQuestions = shuffleArray(questions);
const userInput = await inquirer.prompt(shuffledQuestions);
// Calculate marks based on correct answers
marks = shuffledQuestions.reduce((acc, question) => {
    const userAnswer = userInput[question.name];
    return userAnswer === question.correctAnswer ? acc + 5 : acc;
}, 0);
let correctOptions = [
    "A superset of JavaScript that adds static types.",
    "let variableName: type;",
    "tsc filename.ts",
    "let numbers: number[] = [1, 2, 3];",
    "To define a contract for objects.",
    "By adding a question mark after the property name.",
    "To make a property immutable.",
    "To define a set of named constants.",
    "let tuple: [string, number];",
    "Union type",
    "Static type checking",
    "function greet(name: string): void {}",
    "class User { name: string; age: number; }",
    "A variable that can hold any data type",
    "interface User { name: string; } const user: User = { name: 'Ali' }; console.log(user.name);",
    "=== checks for value and type equality, while == performs type coercion.",
    "interface User { name: string; age?: number; }",
    "To organize code and avoid naming conflicts",
    "Classes define objects, interfaces define contracts.",
    "for (let i = 0; i < array.length; i++) { ... }"
];
function myAnswer() {
    //   console.log(`\nCorrect Options: ${correctOptions.join(', ')}`);
    console.log(`\nYou obtained ${marks} marks out of 100.`);
    if (marks === 100) {
        console.log(chalk.bold.blueBright(`\nCongratulations! You got full ${marks} marks out of 100.`));
    }
    else if (marks > 70) {
        console.log(chalk.bold.greenBright(`\nNot bad! Your marks are ${marks} out of 100. Try again for improvement.`));
    }
    else if (marks < 50) {
        console.log(chalk.bold.red(`\nUnfortunately! You got ${marks} marks out of 100. Try again for improvement, better luck next time.`));
    }
    else {
        console.log(chalk.bold.yellow(`\nYou got ${marks} marks out of 100. Keep practicing.`));
    }
}
// Call the function to display the result
myAnswer();
