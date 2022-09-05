console.log("This is how you use Functions in JavaScript");

console.log("");

// let name1 = "Noob";
// let name2 = "Bot";
// let name3 = "Gu";
// let name4 = "HaGu";
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");


//noob eisob kore ⬆️
// As we can see in the above example, we are writing a particular set of codes every time. To avoid this JavaScript functions come into action. We can write the above code with the help of JavaScript functions as follows-
//pro eisob kore ⬇️


function greet(name, greetText){
  console.log(name + " Tui");
  console.log(greetText + " " + name);
}


let name1 = "Noob";
let name2 = "Bot";
let name3 = "Gu";
let name4 = "HaGu";
let greetText = "Pala ekhan theke";


greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
// We have increased the use of code reusability with the help of a JavaScript function. Also, we can increase more number of parameters in the JavaScript functions without writing the code again.
// We have to pass “greetText ” also in the function to make it executed. The function will only be called till you pass the value to it otherwise it will never be called.

console.log("");

// Now we use some functions to make it return a particular value. Return value means it gives you some output in return
let returnValu = greet(name1);
console.log(returnValu)
// Here the output will be undefined because the parameter greet does not return anything. It just prints the value through console.log. But if we make a new function as follows-



function sum(a,b,c){
  let d = a + b + c;
  return d;
}
let returnVal = sum(1,2,3);
console.log(returnVal)
// We will get the output 6 here because the variable d is being returned here by the function. 

// This line will never execute (Unreachable code) ⬇️
// console.log("Function is returned");
