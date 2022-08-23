//The object class represents one of JavaScript’s data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor. we have two types of values used in JavaScript- primitive and reference.
let myVar = 34;
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
console.log(employee);

let name = [1, 2, 4, "Harry", undefined];
let names = new Array(41, 2, 4, "Harry", undefined);
let namee = new Array(23);
console.log(names.length);
names = names.sort();
names.push("this is pushed");
console.log(names);