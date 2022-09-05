//The object class represents one of JavaScript’s data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor. we have two types of values used in JavaScript- primitive and reference.
let myVar1 = 34;
let myVar2 = "string";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;

        
let employee = {
    name: "Pepe",
    salary: 10,
    channel: "Sussy Nani Baka",
    "channel 2": "shaGkin kim mUrkha",
}
//In this example, an employee is an object that contains the name, salary, channel, and channel 2 inside it. This is an example, where we create objects manually by us. 
console.log(employee);



//There is a special kind of object known as Arrays. The JavaScript Array class is a global object that is used in the construction of arrays; which are high level, list-like objects. An array is a special variable, which can hold more than one value at a time. 
let name = [1, 2, 4, "Sussy", undefined];
console.log(name);



//To print the value present at any index number
console.log(name[1])
//It will print the value present at index number 1. Arrays are important because they make it easier to iterate through each and every element present in DOM. 



//Arrays can be created with the help of a "new" keyword 
let nam = new Array(23);
//In this way, an array will be treated as an object. The new keyword is used to create a new object.



let names = new Array(41, 2, 4, "Sussy", undefined);
//This will sort all the elements in the array.
names = names.sort();
names.push("this is pushed");
console.log(names);



//To know the length of an array, we can use the 'length' function
console.log(names.length);
//the output will be 5 because the array names contain 5 elements in it.


