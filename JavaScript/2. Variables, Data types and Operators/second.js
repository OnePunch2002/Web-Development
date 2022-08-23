console.clear();
console.log("Hello Noob");
alert("Alert for no reason");
document.write("this is document write via Javascript");

// Javascript console API
console.warn("Giving warning for no reason");
console.error("Error occured for no reason");
console.assert(4 == 2 - 2);


console.log("");


// Javascript variables
var num1 = 5;
var num2 = 2;
console.log("num1 = ", num1);
console.log("num2 = ", num2);
console.log("The value of num1 + num2 is " + (num1 + num2));
console.log("The value of num1 - num2 is " + (num1 - num2));
console.log("The value of num1 × num2 is " + (num1 * num2));
console.log("The value of num1 ÷ num2 is " + (num1 / num2));

// power
console.log("The value of num1 ** num2 is " + (num1 ** num2));


console.log("");


// increment and decrement :

// here in "num1++" the number num1 get printed first then it gets incremented, so as a result we get the same number as output
// In the second line we have "++num1", Here the number is incremented first then it gets printed, so we will have an incremated number as output but in the 1st line we already have an incrementation i.e (num1++) , where we have an inrementation in the end . Therefore we will have a double incremated number as 2nd output ie ("1st output : num1" ,"2nd output : ++ ++num1").
console.log("The value of num1 ++ is " + (num1++));
console.log("The value of ++ num1 is " + (++num1));

// process will continue with the incremented number not the original.
// same steps but decrement :
console.log("The value of num1 -- is " + (num1--));
console.log("The value of -- num1 is " + (--num1));


console.log("");


// Operstors in Javascript :
// 1. Unary operator
// 2. Binary operator

// Operators and Operand :
// example : In 3 + 4 , "+" is the operator and 3,4 are operands.
// Operand - entities on which operators operate.

// 1. Unary operator - It has single operand (x = -x)
// example :
c = 36.63;
console.log("c = ", c);
c = -c;
console.log("c = -c : ", c);


console.log("");


// 2. Binary iperator - Ot has two operand (x = y + z)
// example :
c = 420 + 69;
console.log("c = 420 + 69 : ", c);


console.log("");


// data types in javascript :

// numbers
var num3 = 455;
var num4 = 69.96;
console.log("num3 = ", num3);
console.log("num4 = ", num4);


console.log("");


// object
var marks = {
  noob: 34,
  bot: 69,
  pro: 99.99,
};
console.log(" Marks :");
console.log(marks);


console.log("");


// Boolean
var a = true;
var b = false;
console.log("boolean :");
console.log(a, b);


console.log("");


// undefined ,  null
var yes;
var no = null;
console.log(yes);
console.log(no);
