var string1 = "This is a string";
     console.log(string1);

var string1 = "This is a string2";
     console.log(string1);
     //only the updated string is taken




//So here, the value of the variable gets easily changed and it can create a problem if we do not remember the initial value given the variable. It is because the scope of var is global here. But if we declare the var inside any function, then its scope will remain under that function.

     //it is highly recommended to use let instead of var to avoid confusion of the scope of the variable.
     let a = "u";
     {
     let a = "u6";
     console.log(a)
     }
     console.log(a)
     //the value of a is ‘u6’ under a particular scope but the value of a declared outside the scope is ‘u’.


//Constant
const b = "This cannot be changed";
console.log(b)
// b = "I want to change this.";
// console.log(b);

//In the above example, we have declared a as a constant, therefore, its value cannot be changed further by any means. Hence, it will show an error.




//conditional statements. 
let age = 5;
if(age>18){
      console.log("You can drink water");
}
else if(age==2){
      console.log("Age is 2")
}
else if(age==5){
      console.log("Age is 5")
}
else{
      console.log("You can drink Cold Drink");
}
//The output of the above code will be 5 because we set the age initially as 5 and it prints the condition which is true for that particular statement. It is known as an if-else ladder.




//switch-case statements.
const cups = 41; 
  switch (cups) {
    case 4:
      console.log("The value of cups is 4")
        break;

    case 41:
      console.log("The value of cups is 41")
        break;

    case 42:
      console.log("The value of cups is 42")
        break;

    case 43:
      console.log("The value of cups is 43")
        break;
    
    default:
      console.log("The value of cups is none of 4, 41, 42 & 43")
        break;
    }
// break is use to break the switchcase , if not used then it will also print the rest of the elements when condition is satisfied.
// the case has matched exactly with the value of cups. However, if we remove the break statement then all the values will be printed. And in case, no value matches with any case, then the default statement will be printed.