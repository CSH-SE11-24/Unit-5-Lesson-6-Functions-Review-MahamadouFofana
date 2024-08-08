console.log("Script running...")

// SECTION 1: FUNCTIONS REVIEW 
// Task 1: Define a function called `greet` that takes a name as a parameter and logs "Hello, [name]!" to the console.

function greet(name){
  console.log("Hello", name)
}

// Call the greet function with your name (as a string)

greet("Mahamadou Fofana")

// Prompt the user to enter their name

let userName = prompt("Enter your name")

// Call the greet function with their name

greet(userName)

// Task 2: Define a function called `add` that takes two parameters `a` and `b` and returns the sum of `a` and `b`.

function add (a, b){
  console.log(a + b);
}

// Call the add function with any two numbers. Console log the result to check it.

let sum = add(3,7)
console.log(sum)

// Task 3: Define a function called `passwordChecker` that takes two parameters `user` (object) and `passwordGuess` (string) and returns true if the user's password is equal to `passwordGuess`, otherwise returns false

function passwordChecker(user, passwordGuess){
  if (passwordGuess === user.password){
    console.log("true")
  }else{
    console.log("false")
  }
}

// Define a user object that has username and password attributes.

let user = {
  username: 1234567890,
  password: "Password"
};

// Call the passwordChecker function with the user object and the correct password. Console log the result to check it.

passwordChecker(user, "Password")

// Call the passwordChecker function with the user object and the incorrect password. Console log the result to check it.

passwordChecker(user, "Passwor")


// SECTION 2: Arrow functions 
// Task 0: Read the W3Schools page on arrow functions (https://www.w3schools.com/js/js_arrow_function.asp)
// You can also watch a video or use other resources
// Task 1:  Define an ARROW function called `multiply` that takes two parameters `a` and `b` and returns the product of `a` and `b`.

let multiply = (a, b) => a * b

// Call the multiply function with any two numbers. Console log the result to check it.

let yes = multiply(3, 3)
console.log(yes)

// Task 2: Define an ARROW function called `printArray` that takes an array parameter and loops through the array to print each element.

let printArray = (array) => {
  for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

// Define a friends array and define it to have at least 3 friends (they can be imaginary if you can't think of 3...). 

let array = ["ma", "am", "qe"]

// Call the printArray function. You shouldn't have to console log the result.

printArray(array)

// SECTION 3: Callback Functions
// Task 0: Read about callback functions at the following link:
// https://www.programiz.com/javascript/callback


// Task 1: Define a greeter function that prints "Hello world"

function greet(){
  console.log("Hello World")
} 

// Call setTimeout to run the greeter function after 2000 ms

setTimeout(greet, 2000);

// Task 2: Define a repeatCaller function that takes in a callback function and a number. It should call the callback function that number of times.

function repeatCaller(callback, num){
  i = 0
while (i < 4){
  i++
callback()
}
};

// Call repeatCaller with greeter 4 times 

repeatCaller(greet, 4);

// Task 3: Read about anonymous functions in JS. Try to call setTimeout with an anonymous function that console logs "See ya later!"

setTimeout(function(){
  console.log("See ya later!");
}, 2000);