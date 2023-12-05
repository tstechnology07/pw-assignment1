// Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use
// the arrow function to calculate the square of a given number and display the result.


const square = (number) => number * number

const InputNumber = 8;
const result = square(InputNumber)
console.log(`The Square Of ${InputNumber} Is : ${result}`);


// Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a
// personalized greeting message. Use this function to greet three different people.

function generateGreeting(name){
    return `Hello, ${name}`;
}

const person1 = "Tahmeed";
const person2 = "Coko";
const person3 = "Simmba";

console.log(generateGreeting(person1));
console.log(generateGreeting(person2));
console.log(generateGreeting(person3));


// Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
// immediately displays the result.

(function generateSquare(number){
    const SquareResult = number*number;
    console.log(`The Square Result :${SquareResult}`);

})(5); //Enter Your Number Here 

// Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function Tax(income){
    let TaxRate;
    if (income <= 50000){
        TaxRate = 0.1;
    }else if(income <= 100000){
        TaxRate = 0.15;
    }else{
        TaxRate = 0.2;
    }

    return income * TaxRate;
}


console.log("The Tax For income 10000 Is :" ,Tax(10000));
console.log("The Tax For income 100000 Is :" ,Tax(100000));
console.log("The Tax For income 1000000 Is :" ,Tax(1000000));


// Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.

function factorial(n){
    if (n === 0 || n === 1){
        return 1;
    }else {
        return n * factorial(n-1)
    }
}


console.log("factorial of 8 is:", factorial(8));
console.log("factorial of 15 is:", factorial(15));



// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.

function curry(func){
    return function curried(...args){
        if(args.length >= func.length){
            return func(...args);
        }else{
        return function (...moreArgs){
           return curried(...args,...moreArgs);
       }
     };
  }
};

const add = (a,b) => a+b;
const curriedAdd = curry(add);

const AddFive = curriedAdd(5);


console.log(AddFive(5));
console.log(AddFive(10));
console.log(curriedAdd(8 , 5));